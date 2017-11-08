function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-400;
	//150 is half popup's height
	popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('BlackOut');
	toggle(windowname);		
}

function toggle2(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size2(popUpDiv2Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDiv2 = document.getElementById(popUpDiv2Var);
	popUpDiv2_height=blanket_height/2-400;
	//150 is half popup's height
	popUpDiv2.style.top = popUpDiv2_height + 'px';
}
function window_pos2(popUpDiv2Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv2 = document.getElementById(popUpDiv2Var);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv2.style.left = window_width + 'px';
}
function popup2(windowname) {
	blanket_size2(windowname);
	window_pos2(windowname);
	toggle2('BlackOut');
	toggle2(windowname);		
}

function toggle3(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size3(popUpDiv3Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDiv3 = document.getElementById(popUpDiv3Var);
	popUpDiv3_height=blanket_height/2-150;
	//150 is half popup's height
	popUpDiv3.style.top = popUpDiv3_height + 'px';
}
function window_pos3(popUpDiv3Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv3 = document.getElementById(popUpDiv3Var);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv3.style.left = window_width + 'px';
}
function popup3(windowname) {
	blanket_size3(windowname);
	window_pos3(windowname);
	toggle3('BlackOut');
	toggle3(windowname);		
}

function toggle4(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size4(popUpDiv4Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDiv4 = document.getElementById(popUpDiv4Var);
	popUpDiv4_height=blanket_height/2-150;
	//150 is half popup's height
	popUpDiv4.style.top = popUpDiv4_height + 'px';
}
function window_pos4(popUpDiv4Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv4 = document.getElementById(popUpDiv4Var);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv4.style.left = window_width + 'px';
}
function popup4(windowname) {
	blanket_size4(windowname);
	window_pos4(windowname);
	toggle4('BlackOut');
	toggle4(windowname);		
}

function toggle5(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size5(popUpDiv5Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDiv5 = document.getElementById(popUpDiv5Var);
	popUpDiv5_height=blanket_height/2-150;
	//150 is half popup's height
	popUpDiv5.style.top = popUpDiv5_height + 'px';
}
function window_pos5(popUpDiv5Var) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv5 = document.getElementById(popUpDiv5Var);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv5.style.left = window_width + 'px';
}
function popup5(windowname) {
	blanket_size5(windowname);
	window_pos5(windowname);
	toggle5('BlackOut');
	toggle5(windowname);		
}

function toggleSS(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_sizeSS(popUpDivSSVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var BlackOut = document.getElementById('BlackOut');
	BlackOut.style.height = blanket_height + 'px';
	var popUpDivSS = document.getElementById(popUpDivSSVar);
	popUpDivSS_height=blanket_height/2-400;
	//150 is half popup's height
	popUpDivSS.style.top = popUpDivSS_height + 'px';
}
function window_posSS(popUpDivSSVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDivSS = document.getElementById(popUpDivSSVar);
	window_width=window_width/2-237;
	//150 is half popup's width
	popUpDivSS.style.left = window_width + 'px';
}
function popupSS(windowname) {
	blanket_sizeSS(windowname);
	window_posSS(windowname);
	toggleSS('BlackOut');
	toggleSS(windowname);		
}