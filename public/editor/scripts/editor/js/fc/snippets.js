define(function(require) {

	var snippets = 
	{ 
		html: 
		[ 
			{
				name: "Comment",
				title: "Add a Comment",
				id: "snippet-comment",
				data: "<!--  -->"
			},
			{
				name: "Table",
				title: "Add a Table",
				id: "snippet-table",
				data: 
					'<table> \n' +
					'	<tr> \n' +
					'		<th></th> \n' +
					'		<th></th> \n' +
					'	</tr> \n' +
					'	<tr> \n' +
					'		<td></td> \n' +
					'		<td></td> \n' +
					'	</tr> \n' +
					'</table>'
			},
			{
				name: "Definition List",
				title: "Add a Definition List",
				id: "snippet-definitionList",
				data: 
					'<dl> \n' +
					'	<dt></dt> \n' +
					'		<dd></dd> \n' +
					'	<dt></dt> \n' +
					'		<dd></dd> \n' +
					'</dl>'
			}
		]	
	}
	
	function Snippets() {	
	}
	
	Snippets.getSnippetObj = function() {
		return snippets;
	};
	
	return Snippets;
})