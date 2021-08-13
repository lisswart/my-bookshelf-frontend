bugs to fix:

[] handle path not found error on the frontend for various routes where it's applicable
 
[] fix bug on grouplist: it display each book twice (why?)

[] fix bug on addBook form, clicking the cancel button still adds the a book to the database with empty strings for all fieldname

[] add a cleanup function in two useEffectHooks, one used in BookDescription, another in BookImage
 
[] add a button or a link that allows user to see all books after choosing to see books through one of the sorting mechanisms, currently there is no way for a user to see all books without refreshing page



Stretch goals:

[] make taglist and grouplist collapsible using drop down menu

[] make number of books in each tag/group/read-status appears next to tagname/groupname/statusname

[] implement search functionality

[] add some cool fadein animation

[] make displays responsive to screen size using media query

[] add choose light theme and dark theme functionality 

[] refactor css to sort styling by a group of related components