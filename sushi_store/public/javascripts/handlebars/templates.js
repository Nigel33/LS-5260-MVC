this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><figure><img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" alt=\"cart-item\"></figure><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.quantity : stack1), depth0))
    + " x $"
    + alias2((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.price : stack1),{"name":"format_price","hash":{},"data":data}))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><section><h3>Your<br>shopping cart</h3><p class=\"total\">"
    + container.escapeExpression((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.totalPrice : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><p></p><footer><a class=\"left empty_cart\" href=\"#\">Empty cart</a><!----><a class=\"right checkout\" href=\"/checkout\">Checkout</a></footer></section>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><td><img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" alt=\"cart-item\"></td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td><td><span class=\"quantity_modifier\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.quantity : stack1), depth0))
    + "</p><span class=\"quantity_modifier\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></td><td>$"
    + alias2((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.price : stack1),{"name":"format_price","hash":{},"data":data}))
    + "</td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"img_top\"></div><section><h1>Order Details</h1><table><thead><tr><th>Item</th><th></th><th>Quantity</th><th>Price</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table><p>Total: <span class=\"total\">$"
    + container.escapeExpression((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.totalPrice : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</span></p><footer><a class=\"cancel\" href=\"/\">Cancel order</a><form action=\"/\" method=\"post\"><input type=\"submit\" value=\"ORDER NOW!\"></form></footer></section><div class=\"img_bottom\"></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a><div class=\"cart\"><a href=\"#\"><span class=\"left\">Shopping Cart</span><span class=\"right\"><!----><span class=\"count\"> "
    + container.escapeExpression(((helper = (helper = helpers.totalQuantity || (depth0 != null ? depth0.totalQuantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"totalQuantity","hash":{},"data":data}) : helper)))
    + " </span>		items</span></a></div>";
},"useData":true});

this["JST"]["sushi"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article><header><figure><img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\"></figure><h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></header><p class=\"price\">$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><footer><a href=\"#\" class=\"add_cart\">Add to cart</a></footer></article>";
},"useData":true});

this["JST"]["sushiItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<tr><td>"
    + alias3((helpers.formatKey || (depth0 && depth0.formatKey) || alias2).call(alias1,depth0,{"name":"formatKey","hash":{},"data":data}))
    + "</td><td>"
    + alias3((helpers.getValue || (depth0 && depth0.getValue) || alias2).call(alias1,depth0,{"name":"getValue","hash":{},"data":data}))
    + "</td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div><div class=\"nav prev\"><img src=\"images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"selected-item\"></figure><article><a class=\"close\" href=\"/\">+</a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.nutrition : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table></aside><div class=\"nav next\"><img src=\"images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});