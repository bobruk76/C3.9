function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.change = function(fn){
	this.each(element => element.addEventListener('change', fn))
	return this
}

jQuery.prototype.setReadOnly = function(){
	this.each(element => element.readOnly = true)
  return this;
}

jQuery.prototype.setDisabled  = function(isDisable = true){
	this.each(element => element.disabled  = isDisable)
  return this;
}
jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

jQuery.prototype.addClass = function(name){
	this.each(element => element.classList.add(name))
  return this;
}

jQuery.prototype.removeClass = function(name){
	this.each(element => element.classList.remove(name))
  return this;
}

jQuery.prototype.html = function(newHTML=''){
  if (newHTML !== ''){
    this.each(element => {
      let temp = document.createElement('div');
      temp.innerHTML = newHTML;
      let htmlObject = temp.firstChild;
      element.replaceWith(htmlObject);
    });
  }
  let result = [];
  this.each(element => {
    result.push(element.outerHTML);
  });
  return result;
}

jQuery.prototype.text = function(newTextContent=''){
  if (newTextContent !== ''){
    this.each(element => element.textContent = newTextContent);
  };
  let result = [];
  this.each(element => result.push(element.textContent));
  return result;
}

jQuery.prototype.value = function(newValue = null){
  if (newValue !== null){
    this.each(element => element.value = newValue);
  };
    let result = [];
   this.each(element => result.push(element.value));
  return result;
}
const $ = (e) => new jQuery(e);