var require = meteorInstall({"imports":{"api":{"links.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/api/links.js                                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  module1.export({
    LinksCollection: function () {
      return LinksCollection;
    }
  });
  var Mongo;
  module1.link("meteor/mongo", {
    Mongo: function (v) {
      Mongo = v;
    }
  }, 0);
  ___INIT_METEOR_FAST_REFRESH(module);
  var LinksCollection = new Mongo.Collection('links');
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/App.jsx                                                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  module1.export({
    App: function () {
      return App;
    }
  });
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var Hello;
  module1.link("./Hello.jsx", {
    Hello: function (v) {
      Hello = v;
    }
  }, 1);
  var Info;
  module1.link("./Info.jsx", {
    Info: function (v) {
      Info = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var App = function () {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Meteor!"), /*#__PURE__*/React.createElement(Hello, null), /*#__PURE__*/React.createElement(Info, null));
  };
  _c = App;
  var _c;
  $RefreshReg$(_c, "App");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Hello.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/Hello.jsx                                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  var _slicedToArray;
  module1.link("@babel/runtime/helpers/slicedToArray", {
    default: function (v) {
      _slicedToArray = v;
    }
  }, 0);
  module1.export({
    Hello: function () {
      return Hello;
    }
  });
  var React, useState;
  module1.link("react", {
    "default": function (v) {
      React = v;
    },
    useState: function (v) {
      useState = v;
    }
  }, 0);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var Hello = function () {
    _s();
    var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];
    var increment = function () {
      setCounter(counter + 1);
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: increment
    }, "Click Me"), /*#__PURE__*/React.createElement("p", null, "You've pressed the button ", counter, " times."));
  };
  _s(Hello, "mgO7WMHyhiBnLtH7uw/qAj2Cy9A=");
  _c = Hello;
  var _c;
  $RefreshReg$(_c, "Hello");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Info.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/Info.jsx                                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  module1.export({
    Info: function () {
      return Info;
    }
  });
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var useFind, useSubscribe;
  module1.link("meteor/react-meteor-data", {
    useFind: function (v) {
      useFind = v;
    },
    useSubscribe: function (v) {
      useSubscribe = v;
    }
  }, 1);
  var LinksCollection;
  module1.link("../api/links", {
    LinksCollection: function (v) {
      LinksCollection = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var Info = function () {
    _s();
    var isLoading = useSubscribe('links');
    var links = useFind(function () {
      return LinksCollection.find();
    });
    if (isLoading()) {
      return /*#__PURE__*/React.createElement("div", null, "Loading...");
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Learn Meteor!"), /*#__PURE__*/React.createElement("ul", null, links.map(function (link) {
      return /*#__PURE__*/React.createElement("li", {
        key: link._id
      }, /*#__PURE__*/React.createElement("a", {
        href: link.url,
        target: "_blank"
      }, link.title));
    })));
  };
  _s(Info, "QEkHgo/x/dyE6gVwltHrOUobStg=", false, function () {
    return [useSubscribe, useFind];
  });
  _c = Info;
  var _c;
  $RefreshReg$(_c, "Info");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.jsx                                                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var createRoot;
  module1.link("react-dom/client", {
    createRoot: function (v) {
      createRoot = v;
    }
  }, 1);
  var Meteor;
  module1.link("meteor/meteor", {
    Meteor: function (v) {
      Meteor = v;
    }
  }, 2);
  var App;
  module1.link("/imports/ui/App", {
    App: function (v) {
      App = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(function () {
    var container = document.getElementById('react-target');
    var root = createRoot(container);
    root.render( /*#__PURE__*/React.createElement(App, null));
  });
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});

var exports = require("/client/main.jsx");