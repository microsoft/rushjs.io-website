// From https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js
declare const autocomplete;

interface Window {
  // Assigned by top_nav.html
  searchIndex: any;
}

const searchIndex = window.searchIndex;

autocomplete('#search-input', { hint: false }, [
  {
    source: autocomplete.sources.hits(searchIndex, { hitsPerPage: 5 }),
    displayKey: 'title',
    templates: {
      suggestion: function(suggestion) {
        let resultHeading = '';

        if (suggestion._highlightResult && suggestion._highlightResult.title) {
          resultHeading = suggestion._highlightResult.title.value;
        } else if (suggestion.title) {
          resultHeading = suggestion.title;
        } else {
          if ((!suggestion.tag_name) || suggestion.tag_name[0] !== 'h') {
            // If the suggestion did not match a heading, then we can use the heading
            // from the hierarchy
            if (suggestion.hierarchy) {
              for (let i = 6; i >= 0; --i) {
                let hierarchyValue = suggestion.hierarchy['lvl' + i.toString()];
                if (hierarchyValue) {
                  resultHeading = hierarchyValue;
                  break;
                }
              }
            }
          }
        }

        if (!resultHeading) {
          resultHeading = suggestion.slug || suggestion.url || '(Untitled)';
        }

        let result = '<b>' + resultHeading + '</b>';

        if (suggestion._snippetResult && suggestion._snippetResult.content) {
            result += '<br />' + suggestion._snippetResult.content.value;
        } else if (suggestion._highlightResult && suggestion._highlightResult.content) {
          result += '<br />' + suggestion._highlightResult.content.value;
        } else if (suggestion.content) {
          result += '<br />' + suggestion.content;
        }

        return '<p>' + result + '</p>';
      }
    }
  }
]).on('autocomplete:selected', function(event, suggestion, dataset) {
  console.log(suggestion.url);
  window.location.href = suggestion.url;
});
