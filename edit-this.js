// edit-this.js
console.log('hi, Let me help edit your site');


jQuery(document).ready(function($) {

	function enable_edit_this(){
		$('*[data-edit-this]').each(function(){
			var filepath = $(this).data('edit-this');
			var edit_path = "https://github.com/"+git_org+"/"+git_repo+"/edit/"+branch+"/content/"+filepath;
			console.log(edit_path);
			var edit_link = '<a class="edit_this_btn" href="'+edit_path+'" title="edit this"><span>edit</span></a>';
			$(this).addClass('edit-this').append(edit_link);
		});
	}
	function disable_edit_this(){
		$('*[data-edit-this]').each(function(){
			$(this).removeClass('edit-this');
			$('.edit_this_btn').remove();
		});
	}

	$('.edit_tools .editor').click(function(e){
		e.preventDefault();
		// If the editing tool is already active
		if ( $(this).is( ".active" ) ) {
			// runs a function that removes edit tools from each item on the page that is editable.
			disable_edit_this();
			// remove the active class from the edit button
			$(this).removeClass('active');
			// swap out the icon in the edit button
			$(this).html('<i class="far fa-edit"></i>');
		} else {
			enable_edit_this();
			$(this).addClass('active');
			$(this).html('<i class="fas fa-times"></i>');
		}
		 // <i class="fas fa-times"></i>
  });

});
