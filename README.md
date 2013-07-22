onselect
========

Let's say you have this HTML code.

	<select id="countries">
		<option value="IN">India</option>
		<option value="US">United Stated</option>
		<option value="GB">United Kingdon</option>
	</select>
	
And, you want to reload the page as soon as the user selects a country. With JQuery, you would write:

	$('#countries').on('change', function(){
		// Reload page
	});
	
Above code works as expected, as long as the user uses mouse to select a value. But it will behave differently in Chrome / Firefox when the user uses keyboard to select a new value. I.e.

* Chrome / Internet explorer fires the *change* event as soon as the user changes a dropdown box value using down/up arrow.
* Firefox will wait till the dropdown box loose its focus and then, it will fire the *change* event.

In the above example, it is approriate to reload the page once the user completely done with selecting a new value. I.e. The Firefox behavior is needed in Chrome/IE too.

So, use this JQuery plugin to achieve this. After including the plug-in, bind the events as below:

	$('#countries').onSelect(function(){
		// Reload page
	});

The callback function / reloading page will happen only after,

1. User selects a new value using mouse.
2. User uses keyboard to scroll through the dropdown box values and either press TAB / Enter key.

This behavior will be consistent across IE9 / Chrome / Firefox.
