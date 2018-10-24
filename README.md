# Digital.gov Chrome Extension

This plugin helps us to solve some problems that we encounter when trying to edit content through Federalist.

## 1. Federalist Preview Link
When on a pull request in GitHub, it provides you with a link to the Federalist preview, even before the preview has been fully built out.

## 2. (Beta) Edit Links on content types
As an editor, it is hard to know where to go in the CMS to edit all the elements on a page, as different modules often come from different data sources.

The "edit-this" feature is a way to make it easier to edit the file at the source of that data or content.

### Install

#### 1. Define your GitHub Repo
In the head of your page, you'll need to insert:
```
<script type="text/javascript">
  git_org          = "GSA";
  git_repo         = "digitalgov.gov";
  branch           = "master"
</script>
```

#### 2. Pass the file name as data
If you want to make an element on the page editable, pass the relative path to the file that you want to edit, into the parent `<div>` that surrounds the content.

**Example**
```
<article data-edit-this="/_pages/hello-world.md">
  Hello world!
</article>
```

## 3. Add the edit button
In your footer, add this:
```
<div class="edit_tools">
  <a class="editor" href="#"><i class="far fa-edit"></i></a>
</div>
```
