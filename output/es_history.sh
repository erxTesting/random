unzip pv.zip 
# https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html
cd elasticsearch-7.0.1/ && ./bin/elasticsearch -d -p pid && less logs/elasticsearch.log # pkill -F pid 

curl -X GET "localhost:9200/_cat/health?v"  # check the cluster health
curl -X GET "localhost:9200/_cat/nodes?v"   # list of nodes in cluster
curl -X GET "localhost:9200/_cat/indices?v" # List All Indices
curl -X GET "localhost:9200/_cat/indices?v" # List All Indices
curl -X DELETE "localhost:9200/customer?indexName" # delete index
curl -X DELETE "localhost:9200/twitter"
curl -H "Content-Type: application/json" -XPOST "localhost:9200/bank/_doc/_bulk?pretty&refresh" --data-binary "@accounts.json"
curl -X GET "localhost:9200/a11y.axe.json.k12?pretty" # List Index a11y.axe.json.k12
curl -I "localhost:9200/a11y.axe.json.k12" # Does Index a11y.axe.json.k12 exist?
curl -X PUT "localhost:9200/data/_doc/1" -H 'Content-Type: application/json' -d'{ "count": 5 }'

# https://www.deque.com/axe/documentation/api-documentation/#results-object # axe API Documentation

# https://kevinmarsh.com/2014/10/23/using-jq-to-import-json-into-elasticsearch.html
 # cat axe-results-1550176765418.json | jq -c '.[] | {"index": {"_index": "a11y.axe.json.pv", "_type": "a11yResult", "_id": .id}}, .' | curl -XPOST localhost:9200/_bulk --data-binary @-
 cat ~/workspace/output/axe-results-simplified.json \
 | jq -c '.[] | {"index": {"_index": "a11y.axe.json.pv", "_type": "a11yResult", "_id": "http://blog.prettyvulgar.com/"}}, .' \
 | curl -XPOST localhost:9200/_bulk -H 'Content-Type: application/json' --data-binary @-

 cat  ~/workspace/output/pv/axe-results-1551111835179.json \
 | jq -c '.[] | {"index": {"_index": "a11y.axe.json.pv", "_type": "a11yResult", "_id": "https://www.prettyvulgar.com/about-us"}}, .' \
 | curl -XPOST localhost:9200/_bulk -H 'Content-Type: application/json' --data-binary @-

# http://blog.prettyvulgar.com/
 # echo http://blog.prettyvulgar.com/ | tr -dc '[:alnum:]\n\r' | tr '[:upper:]' '[:lower:]' #| base64 --wrap=0
 # httpblogprettyvulgarcom

 # <~/workspace/input/pv_pages xargs -n1 -I % axe % --save
 # <~/environment/random/input/k12_pages xargs -n1 -I % axe % --save
 # <~/workspace/input/pv_pages xargs -n1 -I % | base64 --wrap=0
 # cat ~/workspace/input/pv_pages | tr -dc '[:alnum:]\n\r' | tr '[:upper:]' '[:lower:]' | base64 --wrap=0

 cat ~/environment/random/output/k12/2019-05-14/axe-results-1557846984124.json \
 | jq -c '.[] | {"index": {"_index": "a11y.axe.json.k12", "_type": "axeJSON", "_id": "testIndex"}}, .' \
 | curl -XPOST localhost:9200/_bulk -H 'Content-Type: application/json' --data-binary @- 

 cat ~/environment/random/output/k12/2019-05-14/axe-results-1557846984124.json \
 | jq -c '.[] | {"index": {"_index": "a11y.axe.json.k12", "_type": "axeJSON", "_id": "testIndex"}}, .' \
 | curl -X PUT "localhost:9200/data/_doc/1" -H 'Content-Type: application/json' --data-binary @- 

# axe JSON format
# 	passes: These results indicate what elements passed the rules
# 	inapplicable: These results indicate which rules did not run because no matching content was found on the page. For example, with no video, those rules won't run.
# 	incomplete: These results were aborted and require further testing. This can happen either because of technical restrictions to what the rule can test, or because a javascript error occurred.
# 	violations: These results indicate what elements failed the rules
# 		description - Text string that describes what the rule does
# 		-+help - Help text that describes the test that was performed
# 		helpUrl - URL that provides more information about the specifics of the violation. Links to a page on the Deque University site.
# 		id - Unique identifier for the rule; see the list of rules
# 		-+impact - How serious the violation is. Can be one of "minor", "moderate", "serious", or "critical" if the Rule failed or null if the check passed
# 		tags - Array of tags that this rule is assigned. These tags can be used in the option structure to select which rules are run (see axe.run parameters for more information).
# 		nodes - Array of all elements the Rule tested
# 			html - Snippet of HTML of the Element
# 			impact - How serious the violation is. Can be one of "minor", "moderate", "serious", or "critical" if the test failed or null if the check passed
# 			target - Array of either strings or Arrays of strings. If the item in the array is a string, then it is a CSS selector. If there are multiple items in the array each item corresponds to one level of iframe or frame. If there is one iframe or frame, there should be two entries in target. If there are three iframe levels, there should be four entries in target. If the item in the Array is an Array of strings, then it points to an element in a shadow DOM and each item (except the n-1th) in this array is a selector to a DOM element with a shadow DOM. The last element in the array points to the final shadow DOM node.
# 			any - Array of checks that were made where at least one must have passed. Each entry in the array contains:
# 				id - Unique identifier for this check. Check ids may be the same as Rule ids
# 				impact - How serious this particular check is. Can be one of "minor", "moderate", "serious", or "critical". Each check that is part of a rule can have different impacts. The highest impact of all the checks that fail is reported for the rule
# 				message - Description of why this check passed or failed
# 				data - Additional information that is specific to the type of Check which is optional. For example, a color contrast check would include the foreground color, background color, contrast ratio, etc.
# 				relatedNodes - Optional array of information about other nodes that are related to this check. For example, a duplicate id check violation would list the other selectors that had this same duplicate id. Each entry in the array contains the following information:
# 					target - Array of selectors for the related node
# 					html - HTML source of the related node
# 			all - Array of checks that were made where all must have passed. Each entry in the array contains the same information as the 'any' array
# 			none - Array of checks that were made where all must have not passed. Each entry in the array contains the same information as the 'any' array
