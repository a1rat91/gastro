(function() {
	
	var event = 'click';
	
	var Tabs = function(opts) {
		
		this.options = this.extendFn({
			classMain: 'tabs-menu',
			parent: '[data-tabs]',
			buttons: '[data-tabs-children]',
			offsetMobile: 70,
			calcbackFunc: function () {}
		}, opts);
		
		this.init();
		
	}
	
	Tabs.prototype = {
		
		init: function() {
			
			var obj = this;
			
			parents = document.querySelectorAll(this.options.parent);
			
			if(!parents.length) {
				return false;
			}
			
			this.each(parents, function(index) {
				
				var triggerActive = false;
				var tags = {};
				tags.xsbuttons = [];
				tags.tabs = [];
				
				tags.buttons = this.querySelectorAll(obj.options.buttons);
				
				obj.each(tags.buttons, function(index) {
					
					tags.tabs.push(document.querySelector(this.getAttribute('href')));
					
					tags.xsbuttons.push(obj.insert('div', {'class': obj.options.classMain + '__xslink'}, this.innerHTML, tags.tabs[index]));
					
					if(this.classList.contains('active')) {
						tags.tabs[index].classList.add('active');
						tags.xsbuttons[index].classList.add('active');
						obj.triggerActive = true;
					}
					
					this.addEventListener(event, function() {
						
						obj.each(tags.buttons, function(i) {
							
							this.classList.remove('active');
							tags.xsbuttons[i].classList.remove('active');
							tags.tabs[i].classList.remove('active');
							
						});
						
						this.classList.add('active');
						tags.xsbuttons[index].classList.add('active');
						tags.tabs[index].classList.add('active');
						obj.options.calcbackFunc();
						
					}, false);
					
					tags.xsbuttons[index].addEventListener(event, function() {
						
						obj.each(tags.xsbuttons, function(i) {
							
							this.classList.remove('active');
							tags.buttons[i].classList.remove('active');
							tags.tabs[i].classList.remove('active');
							
						});
						
						this.classList.add('active');
						tags.buttons[index].classList.add('active');
						tags.tabs[index].classList.add('active');
						obj.options.calcbackFunc();
						
						window.scrollTo(0, window.pageYOffset + this.getBoundingClientRect().top - obj.options.offsetMobile);
						
					}, false);
					
					this.addEventListener('click', function(e) {
						e.preventDefault();
					});
					
				});
				
				if(!obj.triggerActive) {
					tags.buttons[0].classList.add('active');
					tags.xsbuttons[0].classList.add('active');
					tags.tabs[0].classList.add('active');
				}
				
			});
		},
		
		each: function(nodes, callback) {
			
			Array.prototype.forEach.call(nodes, function(node, index) {
				
				if(callback) {
					callback.call(node, index);
				}
				
			});
			
		},
		
		extendFn: function (destination, source) {
			
			var property;
			
			for (property in source) {
				
				if (source.hasOwnProperty(property)) {
					destination[property] = source[property];
				}
			}
			
			return destination;
		},
		
		insert: function (tagname, attrs, txt, element) {
			
			var tag,
				i;
			
			tag = document.createElement(tagname);
			
			for (i in attrs) {
				if (attrs.hasOwnProperty(i)) {
					tag.setAttribute(i, attrs[i]);
				}
			}
			
			if(txt) {
				tag.innerHTML = txt;
			}
			
			if (element) {
				element.parentNode.insertBefore(tag, element);
			}
			
			return tag;
		}
	}
	
	window.Tabs = Tabs;
	
})();