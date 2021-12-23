(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+aWA":
/*!**************************************!*\
  !*** ./src/view/PublicaLembrete.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicos */ "ly3g");



var estadoInicial = {
  texto: '',
  publicando: false
};

function PublicaLembrete(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function textoAlterado(ev) {
    setEstado({
      texto: ev.target.value,
      publicando: false
    });
  }

  function publica() {
    setEstado({
      texto: estado.texto,
      publicando: true
    });
  }

  var token = props.token;
  var onTokenInvalido = props.onTokenInvalido;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (estado.publicando) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_2__["publicaLembrete"])(estado.texto, token).then(function () {
        return setEstado(estadoInicial);
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado, token, onTokenInvalido]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message is-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-header"
  }, "Lembrete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "textarea",
    value: estado.texto,
    onChange: textoAlterado
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button is-success",
    onClick: publica
  }, "Publicar")));
}

/* harmony default export */ __webpack_exports__["default"] = (PublicaLembrete);

/***/ }),

/***/ "/0LD":
/*!**************************!*\
  !*** ./src/view/App.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "FLf1");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.jsx */ "guT4");
/* harmony import */ var _Autores_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Autores.jsx */ "6TFM");
/* harmony import */ var _PublicaLembrete_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PublicaLembrete.jsx */ "+aWA");
/* harmony import */ var _MostraLembretes_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MostraLembretes.jsx */ "clhG");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "60Zk");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_7__);








var estadoInicial = {
  token: undefined,
  tokenDecodificado: undefined,
  mostrandoAutores: false,
  autores: []
};
var autores = [{
  nome: "Thais Goulart Firmino",
  matricula: 17103973
}, {
  nome: "Cleberton de Souza Oliveira",
  matricula: 17205083
}, {
  nome: "Alceu Ramos Conceição Júnior",
  matricula: 14200720
}, {
  nome: "Pedro Gandra Della Giustina",
  matricula: 18202534
}, {
  nome: "Rafael Nilson Witt",
  matricula: 18200649
}];

function reducer(estado, acao) {
  switch (acao.type) {
    case 'REGISTRE_TOKEN':
      return {
        token: acao.token,
        tokenDecodificado: acao.tokenDecodificado,
        mostrandoAutores: false,
        autores: []
      };

    case 'RECEBA_NOVO_TOKEN':
      return {
        token: acao.token,
        tokenDecodificado: jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(acao.token),
        mostrandoAutores: false,
        autores: []
      };

    case 'REGISTRE_USUARIO_SAIU':
      return estadoInicial;

    case 'MOSTRE_AUTORES':
      return {
        token: estado.token,
        tokenDecodificado: estado.tokenDecodificado,
        mostrandoAutores: true,
        autores: autores
      };

    case 'ESCONDA_AUTORES':
      return {
        token: estado.token,
        tokenDecodificado: estado.tokenDecodificado,
        mostrandoAutores: false,
        autores: []
      };

    default:
      throw new Error("BUG: acao.type inv\xE1lido: ".concat(acao.type));
  }
}

function tokenValido(tokenDecodificado) {
  if (tokenDecodificado) {
    var agora = Date.now();
    var exp = tokenDecodificado.exp * 1000;
    return agora < exp;
  } else {
    return false;
  }
} // FIXME Não há nade de errado com esta aplicação. A tarefa consiste em
// colocar a aplicação na sua máquina virtual na nuvem da UFSC.


function App() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, estadoInicial),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      estado = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = window.localStorage.getItem('token');
    var tokenDecodificado;
    if (token === null) token = undefined;else {
      tokenDecodificado = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token);
      if (tokenValido(tokenDecodificado)) dispatch({
        type: 'REGISTRE_TOKEN',
        token: token,
        tokenDecodificado: tokenDecodificado
      });else window.localStorage.removeItem('token');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (estado.token !== undefined) {
      window.localStorage.setItem('token', estado.token);
    } else {
      window.localStorage.removeItem('token');
    }
  }, [estado.token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-header"
  }, "UFSC - CTC - INE - INE5646 :: App lembretes ::"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-body"
  }, !estado.mostrandoAutores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button is-warning",
    onClick: function onClick() {
      return dispatch({
        type: 'MOSTRE_AUTORES'
      });
    }
  }, "Mostrar autores"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onToken: function onToken(token) {
      return dispatch({
        type: 'RECEBA_NOVO_TOKEN',
        token: token
      });
    },
    onSaiu: function onSaiu() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    },
    token: estado.token,
    tokenDecodificado: estado.tokenDecodificado
  }), estado.token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PublicaLembrete_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    token: estado.token,
    onTokenInvalido: function onTokenInvalido() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    }
  }), estado.token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MostraLembretes_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    token: estado.token,
    onTokenInvalido: function onTokenInvalido() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Autores_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autores: estado.autores
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button is-success",
    onClick: function onClick() {
      return dispatch({
        type: 'ESCONDA_AUTORES'
      });
    }
  }, "OK")))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6TFM":
/*!******************************!*\
  !*** ./src/view/Autores.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Autores(props) {
  var autores = props.autores;
  console.log(autores);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("abbr", {
    title: "N\xFAmero"
  }, "No.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Matr\xEDcula"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, autores.map(function (autor, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, i), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, autor.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, autor.matricula));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Autores);

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "DSES":
/*!*************************************!*\
  !*** ./src/view/MostraLembrete.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function obtenhaTexto(mostrando, texto) {
  return mostrando ? 'Ocultar' : "".concat(texto.substring(0, 10), "...");
}

function MostraLembrete(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      mostrando = _useState2[0],
      setMostrando = _useState2[1];

  function exibaOuOculte() {
    setMostrando(!mostrando);
  }

  var conteudo;

  if (mostrando) {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "notification is-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      className: "textarea",
      readOnly: true,
      value: props.texto
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-link",
      onClick: exibaOuOculte
    }, obtenhaTexto(mostrando, props.texto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-danger",
      onClick: function onClick() {
        return props.onDelete(props.id);
      }
    }, "Apagar"));
  } else {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-link is-rounded",
      onClick: exibaOuOculte
    }, obtenhaTexto(mostrando, props.texto));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, conteudo);
}

/* harmony default export */ __webpack_exports__["default"] = (MostraLembrete);

/***/ }),

/***/ "clhG":
/*!**************************************!*\
  !*** ./src/view/MostraLembretes.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "5DmW");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "FZtP");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "27RR");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../servicos */ "ly3g");
/* harmony import */ var _MostraLembrete_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MostraLembrete.jsx */ "DSES");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var estadoInicial = {
  lembretes: undefined,
  idLembreteApagar: undefined,
  lendo: false
};

function MostraLembretes(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function apagaUmLembrete(idLembrete) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      idLembreteApagar: idLembrete
    }));
  }

  function leTodosLembretes() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      lendo: true
    }));
  }

  var onTokenInvalido = props.onTokenInvalido;
  var token = props.token;
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (estado.idLembreteApagar !== undefined) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_11__["apagaLembrete"])(token, estado.idLembreteApagar).then(function () {
        if (estado.lembretes !== undefined) {
          var lembs = estado.lembretes.filter(function (lemb) {
            return lemb._id !== estado.idLembreteApagar;
          });
          setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
            lembretes: lembs
          }));
        }
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado.idLembreteApagar, estado.lembretes, onTokenInvalido, token]);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (estado.lendo) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_11__["leLembretes"])(token).then(function (lembretes) {
        return setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
          lembretes: lembretes
        }));
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado.lendo, onTokenInvalido, token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "message-header"
  }, "Mostrar Lembretes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
    className: "button is-info",
    onClick: leTodosLembretes
  }, "Ler Lembretes")), estado.lembretes !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, estado.lembretes.map(function (l) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      key: l._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_MostraLembrete_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: l._id,
      texto: l.texto,
      onDelete: function onDelete() {
        return apagaUmLembrete(l._id);
      }
    }));
  })), estado.lembretes !== undefined && estado.lembretes.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "notification is-warning"
  }, "N\xE3o h\xE1 lembretes para este usu\xE1rio."));
}

/* harmony default export */ __webpack_exports__["default"] = (MostraLembretes);

/***/ }),

/***/ "guT4":
/*!****************************!*\
  !*** ./src/view/Login.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "5DmW");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "FZtP");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "27RR");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../servicos */ "ly3g");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var estadoInicial = {
  login: '',
  senha: '',
  confereSenha: '',
  novoUsuario: false,
  nomeBotao: 'Entrar',
  fazendo: 'nada',
  msg: undefined
};

function reducer(estado, acao) {
  switch (acao.type) {
    case 'REGISTRE_LOGIN':
      return _objectSpread(_objectSpread({}, estado), {}, {
        login: acao.login,
        senha: '',
        confereSenha: '',
        msg: undefined
      });

    case 'REGISTRE_SENHA':
      return _objectSpread(_objectSpread({}, estado), {}, {
        senha: acao.senha,
        msg: undefined
      });

    case 'REGISTRE_CONFERE_SENHA':
      return _objectSpread(_objectSpread({}, estado), {}, {
        confereSenha: acao.confereSenha,
        msg: undefined
      });

    case 'REGISTRE_NOVO_USUARIO':
      {
        var nomeBotao = acao.novoUsuario ? 'Cadastrar Novo Usuário' : 'Entrar';
        return _objectSpread(_objectSpread({}, estado), {}, {
          novoUsuario: acao.novoUsuario,
          nomeBotao: nomeBotao,
          msg: undefined
        });
      }

    case 'FACA_LOGOUT':
      return _objectSpread(_objectSpread({}, estadoInicial), {}, {
        fazendo: 'logout'
      });

    case 'FACA_LOGIN_OU_CADASTRO':
      {
        if (estado.login === '') return _objectSpread(_objectSpread({}, estado), {}, {
          msg: 'Login não definido.'
        });else if (estado.novoUsuario) {
          if (estado.senha === '' || estado.confereSenha === '') return _objectSpread(_objectSpread({}, estado), {}, {
            msg: 'Senha não definida.'
          });else if (estado.senha !== estado.confereSenha) return _objectSpread(_objectSpread({}, estado), {}, {
            msg: 'Senhas não são iguais.'
          });else {
            return _objectSpread(_objectSpread({}, estado), {}, {
              fazendo: 'cadastro',
              msg: 'Fazendo cadastro...'
            });
          }
        } else if (estado.senha === '') return _objectSpread(_objectSpread({}, estado), {}, {
          msg: 'Senha não definida'
        });else {
          return _objectSpread(_objectSpread({}, estado), {}, {
            fazendo: 'login',
            msg: 'Fazendo login...'
          });
        }
      }

    case 'REGISTRE_LOGIN_OK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: undefined,
        fazendo: 'nada'
      });

    case 'REGISTRE_LOGIN_NOK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: acao.motivo,
        fazendo: 'nada'
      });

    case 'REGISTRE_CADASTRO_OK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: undefined,
        fazendo: 'nada'
      });

    case 'REGISTRE_CADASTRO_NOK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: acao.motivo,
        fazendo: 'nada'
      });

    default:
      throw new Error("BUG: acao.type inv\xE1lido: ".concat(acao.type));
  }
}

function Login(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_9__["useReducer"])(reducer, estadoInicial),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_useReducer, 2),
      estado = _useReducer2[0],
      dispatch = _useReducer2[1];

  function login(ev) {
    dispatch({
      type: 'REGISTRE_LOGIN',
      login: ev.target.value
    });
  }

  function senha(ev) {
    dispatch({
      type: 'REGISTRE_SENHA',
      senha: ev.target.value
    });
  }

  function confereSenha(ev) {
    dispatch({
      type: 'REGISTRE_CONFERE_SENHA',
      confereSenha: ev.target.value
    });
  }

  function novoUsuario() {
    dispatch({
      type: 'REGISTRE_NOVO_USUARIO',
      novoUsuario: !estado.novoUsuario
    });
  }

  function facaLoginOuCadastro() {
    dispatch({
      type: 'FACA_LOGIN_OU_CADASTRO'
    });
  }

  function facaLogout() {
    dispatch({
      type: 'FACA_LOGOUT'
    });
  }

  var onToken = props.onToken;
  var onSaiu = props.onSaiu;
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    switch (estado.fazendo) {
      case 'login':
        _servicos__WEBPACK_IMPORTED_MODULE_10__["fazLogin"](estado.login, estado.senha).then(function (token) {
          dispatch({
            type: 'REGISTRE_LOGIN_OK'
          });
          onToken(token);
        }).catch(function (erro) {
          return dispatch({
            type: 'REGISTRE_LOGIN_NOK',
            motivo: erro.message
          });
        });
        break;

      case 'cadastro':
        _servicos__WEBPACK_IMPORTED_MODULE_10__["fazCadastro"](estado.login, estado.senha).then(function (token) {
          dispatch({
            type: 'REGISTRE_CADASTRO_OK'
          });
          onToken(token);
        }).catch(function (erro) {
          return dispatch({
            type: 'REGISTRE_CADASTRO_NOK',
            motivo: erro.message
          });
        });
        break;

      case 'logout':
        onSaiu();
        break;

      case 'nada':
        break;

      default:
        break;
    }
  }, [estado.fazendo, estado.login, estado.senha, onToken, onSaiu]); // -----------------------

  var conteudo;

  if (props.tokenDecodificado === undefined) {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message is-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message-header"
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      className: "checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
      type: "checkbox",
      value: estado.novoUsuario,
      onChange: novoUsuario
    }), "novo usu\xE1rio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      className: "label"
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
      className: "input",
      type: "text",
      value: estado.login,
      onChange: login
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      className: "label"
    }, "Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
      className: "input",
      type: "password",
      value: estado.senha,
      onChange: senha
    }))), estado.novoUsuario && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      className: "label"
    }, "Repita Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
      className: "input",
      type: "password",
      value: estado.confereSenha,
      onChange: confereSenha
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
      className: "button is-link",
      onClick: facaLoginOuCadastro
    }, estado.nomeBotao), estado.msg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "notification is-warning"
    }, estado.msg)));
  } else {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message is-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message-header"
    }, "Usu\xE1rio logado: ", props.tokenDecodificado.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "message-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
      className: "button is-link",
      onClick: facaLogout
    }, "Sair")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, conteudo);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "ly3g":
/*!*************************!*\
  !*** ./src/servicos.js ***!
  \*************************/
/*! exports provided: fazLogin, fazCadastro, publicaLembrete, leLembretes, apagaLembrete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fazLogin", function() { return fazLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fazCadastro", function() { return fazCadastro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicaLembrete", function() { return publicaLembrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leLembretes", function() { return leLembretes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apagaLembrete", function() { return apagaLembrete; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "5s+n");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "ma9I");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);






// -----
// implementa acesso a serviços disponíveis no lado servidor
// -----
function fazCadastro(_x, _x2) {
  return _fazCadastro.apply(this, arguments);
}

function _fazCadastro() {
  _fazCadastro = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(login, senha) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return executaPOST('/cmdFacaCadastro', {
              login: login,
              senha: senha
            });

          case 2:
            resposta = _context.sent;

            if (!resposta.ok) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", resposta.token);

          case 7:
            throw new Error(resposta.message);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fazCadastro.apply(this, arguments);
}

function fazLogin(_x3, _x4) {
  return _fazLogin.apply(this, arguments);
}

function _fazLogin() {
  _fazLogin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(login, senha) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return executaPOST('/cmdFacaLogin', {
              login: login,
              senha: senha
            });

          case 2:
            resposta = _context2.sent;

            if (!resposta.ok) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", resposta.token);

          case 7:
            throw new Error(resposta.message);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fazLogin.apply(this, arguments);
}

function publicaLembrete(_x5, _x6) {
  return _publicaLembrete.apply(this, arguments);
}

function _publicaLembrete() {
  _publicaLembrete = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(texto, token) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return executaPOST('/cmdPubliqueLembrete', {
              texto: texto,
              token: token
            });

          case 2:
            resposta = _context3.sent;

            if (!resposta.ok) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", {
              ok: true
            });

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _publicaLembrete.apply(this, arguments);
}

function leLembretes(_x7) {
  return _leLembretes.apply(this, arguments);
}

function _leLembretes() {
  _leLembretes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(token) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return executaGET('/qryLeiaLembretes', {
              token: token
            });

          case 2:
            resposta = _context4.sent;

            if (!resposta.ok) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", resposta.lembretes);

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _leLembretes.apply(this, arguments);
}

function apagaLembrete(_x8, _x9) {
  return _apagaLembrete.apply(this, arguments);
}

function _apagaLembrete() {
  _apagaLembrete = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(token, idLembrete) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return executaDELETE('/cmdApagueLembrete', {
              idLembrete: idLembrete,
              token: token
            });

          case 2:
            resposta = _context5.sent;

            if (!resposta.ok) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", {
              ok: true
            });

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _apagaLembrete.apply(this, arguments);
}

function executaPOST(caminho, dados) {
  return executaPOSTOUDELETE('POST', caminho, dados);
}

function executaDELETE(caminho, dados) {
  return executaPOSTOUDELETE('DELETE', caminho, dados);
}

function executaPOSTOUDELETE(metodo, caminho, dados) {
  var params = {
    method: metodo,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  };
  return window.fetch(caminho, params).then(function (resposta) {
    if (!resposta.ok) {
      throw new Error('Falha na comunicação com servidor');
    }

    return resposta;
  }).then(function (resposta) {
    return resposta.json();
  });
}

function executaGET(caminho, dados) {
  var params = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  var corpo = JSON.stringify(dados);
  return window.fetch("".concat(caminho, "?dados=").concat(corpo), params).then(function (resposta) {
    if (!resposta.ok) {
      throw new Error('Falha na comunicação com servidor');
    }

    return resposta;
  }).then(function (resposta) {
    return resposta.json();
  });
}



/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/App.jsx */ "/0LD");



var elem = document.createElement('div');
document.body.appendChild(elem);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), elem);

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9QdWJsaWNhTGVtYnJldGUuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8xM2I3Iiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzk0MzUiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/NmI0NiIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT9iOWExIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzkxNjAiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2Q2ZmEiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzVjZGIiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/OWJlMyIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8wY2YwIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3NyYy92aWV3L0F1dG9yZXMuanN4Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT80YWU3Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT84ZmFkIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3NyYy92aWV3L01vc3RyYUxlbWJyZXRlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9Nb3N0cmFMZW1icmV0ZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Vydmljb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImVzdGFkb0luaWNpYWwiLCJ0ZXh0byIsInB1YmxpY2FuZG8iLCJQdWJsaWNhTGVtYnJldGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwidGV4dG9BbHRlcmFkbyIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJwdWJsaWNhIiwidG9rZW4iLCJvblRva2VuSW52YWxpZG8iLCJ1c2VFZmZlY3QiLCJwdWJsaWNhTGVtYnJldGUiLCJ0aGVuIiwiY2F0Y2giLCJ1bmRlZmluZWQiLCJ0b2tlbkRlY29kaWZpY2FkbyIsIm1vc3RyYW5kb0F1dG9yZXMiLCJhdXRvcmVzIiwibm9tZSIsIm1hdHJpY3VsYSIsInJlZHVjZXIiLCJhY2FvIiwidHlwZSIsImp3dCIsImRlY29kZSIsIkVycm9yIiwidG9rZW5WYWxpZG8iLCJhZ29yYSIsIkRhdGUiLCJub3ciLCJleHAiLCJBcHAiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJBdXRvcmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImF1dG9yIiwiaSIsIm9idGVuaGFUZXh0byIsIm1vc3RyYW5kbyIsInN1YnN0cmluZyIsIk1vc3RyYUxlbWJyZXRlIiwic2V0TW9zdHJhbmRvIiwiZXhpYmFPdU9jdWx0ZSIsImNvbnRldWRvIiwib25EZWxldGUiLCJpZCIsImxlbWJyZXRlcyIsImlkTGVtYnJldGVBcGFnYXIiLCJsZW5kbyIsIk1vc3RyYUxlbWJyZXRlcyIsImFwYWdhVW1MZW1icmV0ZSIsImlkTGVtYnJldGUiLCJsZVRvZG9zTGVtYnJldGVzIiwiYXBhZ2FMZW1icmV0ZSIsImxlbWJzIiwiZmlsdGVyIiwibGVtYiIsIl9pZCIsImxlTGVtYnJldGVzIiwibCIsImxlbmd0aCIsImxvZ2luIiwic2VuaGEiLCJjb25mZXJlU2VuaGEiLCJub3ZvVXN1YXJpbyIsIm5vbWVCb3RhbyIsImZhemVuZG8iLCJtc2ciLCJtb3Rpdm8iLCJMb2dpbiIsImZhY2FMb2dpbk91Q2FkYXN0cm8iLCJmYWNhTG9nb3V0Iiwib25Ub2tlbiIsIm9uU2FpdSIsInMiLCJlcnJvIiwibWVzc2FnZSIsImZhekNhZGFzdHJvIiwiZXhlY3V0YVBPU1QiLCJyZXNwb3N0YSIsIm9rIiwiZmF6TG9naW4iLCJleGVjdXRhR0VUIiwiZXhlY3V0YURFTEVURSIsImNhbWluaG8iLCJkYWRvcyIsImV4ZWN1dGFQT1NUT1VERUxFVEUiLCJtZXRvZG8iLCJwYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImpzb24iLCJjb3JwbyIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFjQSxJQUFNQSxhQUFxQixHQUFHO0FBQzVCQyxPQUFLLEVBQUUsRUFEcUI7QUFFNUJDLFlBQVUsRUFBRTtBQUZnQixDQUE5Qjs7QUFLQSxTQUFTQyxlQUFULENBQTBCQyxLQUExQixFQUF3QztBQUN0QyxrQkFBb0RDLHNEQUFRLENBQUNMLGFBQUQsQ0FBNUQ7QUFBQTtBQUFBLE1BQU9NLE1BQVA7QUFBQSxNQUF1QkMsU0FBdkI7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkMsRUFBdkIsRUFBMkI7QUFDekJGLGFBQVMsQ0FBQztBQUFDTixXQUFLLEVBQUVRLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFsQjtBQUF5QlQsZ0JBQVUsRUFBRTtBQUFyQyxLQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTVSxPQUFULEdBQW1CO0FBQ2pCTCxhQUFTLENBQUM7QUFBQ04sV0FBSyxFQUFFSyxNQUFNLENBQUNMLEtBQWY7QUFBc0JDLGdCQUFVLEVBQUU7QUFBbEMsS0FBRCxDQUFUO0FBQ0Q7O0FBRUQsTUFBTVcsS0FBSyxHQUFHVCxLQUFLLENBQUNTLEtBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHVixLQUFLLENBQUNVLGVBQTlCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULE1BQU0sQ0FBQ0osVUFBWCxFQUF1QjtBQUNyQmMsdUVBQWUsQ0FBQ1YsTUFBTSxDQUFDTCxLQUFSLEVBQWVZLEtBQWYsQ0FBZixD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LFVBQUEyRSxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDZ0IsSUFBVCxFQUFKO0FBQUEsR0FMVCxDQUFQO0FBTUQ7O0FBRUQsU0FBU2IsVUFBVCxDQUFxQkUsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQ25DLE1BQU1HLE1BQU0sR0FBRztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVDtBQUZJLEdBQWY7QUFNQSxNQUFNTSxLQUFLLEdBQUdKLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQWQ7QUFDQSxTQUFPM0QsTUFBTSxDQUFDb0UsS0FBUCxXQUFnQlYsT0FBaEIsb0JBQWlDWSxLQUFqQyxHQUEwQ1IsTUFBMUMsRUFDSnBGLElBREksQ0FDQyxVQUFBMkUsUUFBUSxFQUFJO0FBQ2hCLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQUUsWUFBTSxJQUFJL0QsS0FBSixDQUFVLG1DQUFWLENBQU47QUFBc0Q7O0FBQzFFLFdBQU84RCxRQUFQO0FBQ0QsR0FKSSxFQUtKM0UsSUFMSSxDQUtDLFVBQUEyRSxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDZ0IsSUFBVCxFQUFKO0FBQUEsR0FMVCxDQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7O0FDM0VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUQsUUFBUSxDQUFDUCxJQUFULENBQWNTLFdBQWQsQ0FBMEJILElBQTFCO0FBQ0FJLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMscURBQUQsT0FBaEIsRUFBeUJMLElBQXpCLEUiLCJmaWxlIjoibWFpbi4wNjdkYTU4YjEyMWM2ZWJhM2FiYy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtwdWJsaWNhTGVtYnJldGV9IGZyb20gJy4uL3NlcnZpY29zJ1xuXG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gJy4uL3RpcG9zX2Zsb3cnXG5cbnR5cGUgUHJvcHMgPSB7fFxuICB0b2tlbjogVG9rZW4sXG4gIG9uVG9rZW5JbnZhbGlkbzogdm9pZCA9PiB2b2lkXG58fVxuXG50eXBlIEVzdGFkbyA9IHt8IFxuICB0ZXh0bzogc3RyaW5nLFxuICBwdWJsaWNhbmRvOiBib29sZWFuXG58fVxuXG5jb25zdCBlc3RhZG9JbmljaWFsOiBFc3RhZG8gPSB7XG4gIHRleHRvOiAnJyxcbiAgcHVibGljYW5kbzogZmFsc2Vcbn1cblxuZnVuY3Rpb24gUHVibGljYUxlbWJyZXRlIChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW2VzdGFkbzogRXN0YWRvLCBzZXRFc3RhZG86IEVzdGFkbyA9PiB2b2lkXSA9IHVzZVN0YXRlKGVzdGFkb0luaWNpYWwpXG5cbiAgZnVuY3Rpb24gdGV4dG9BbHRlcmFkbyhldikge1xuICAgIHNldEVzdGFkbyh7dGV4dG86IGV2LnRhcmdldC52YWx1ZSwgcHVibGljYW5kbzogZmFsc2V9KVxuICB9XG5cbiAgZnVuY3Rpb24gcHVibGljYSgpIHtcbiAgICBzZXRFc3RhZG8oe3RleHRvOiBlc3RhZG8udGV4dG8sIHB1YmxpY2FuZG86IHRydWV9KVxuICB9XG5cbiAgY29uc3QgdG9rZW4gPSBwcm9wcy50b2tlblxuICBjb25zdCBvblRva2VuSW52YWxpZG8gPSBwcm9wcy5vblRva2VuSW52YWxpZG9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXN0YWRvLnB1YmxpY2FuZG8pIHtcbiAgICAgIHB1YmxpY2FMZW1icmV0ZShlc3RhZG8udGV4dG8sIHRva2VuKVxuICAgICAgICAudGhlbigoKSA9PiBzZXRFc3RhZG8oZXN0YWRvSW5pY2lhbCkpXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgc2V0RXN0YWRvKGVzdGFkb0luaWNpYWwpXG4gICAgICAgICAgb25Ub2tlbkludmFsaWRvKClcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sIFtlc3RhZG8sIHRva2VuLCBvblRva2VuSW52YWxpZG9dKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UgaXMtcHJpbWFyeSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1oZWFkZXInPkxlbWJyZXRlPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1ib2R5Jz5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0ndGV4dGFyZWEnIHZhbHVlPXtlc3RhZG8udGV4dG99IG9uQ2hhbmdlPXt0ZXh0b0FsdGVyYWRvfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtc3VjY2Vzcycgb25DbGljaz17cHVibGljYX0+UHVibGljYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHVibGljYUxlbWJyZXRlXG4iLCIvL0BmbG93XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5cbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLmpzeCdcbmltcG9ydCBBdXRvcmVzIGZyb20gJy4vQXV0b3Jlcy5qc3gnXG5pbXBvcnQgUHVibGljYUxlbWJyZXRlIGZyb20gJy4vUHVibGljYUxlbWJyZXRlLmpzeCdcbmltcG9ydCBNb3N0cmFMZW1icmV0ZXMgZnJvbSAnLi9Nb3N0cmFMZW1icmV0ZXMuanN4J1xuXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuXG5pbXBvcnQgdHlwZSB7VG9rZW4sIFRva2VuRGVjb2RpZmljYWRvLCBBdXRvcn0gZnJvbSAnLi4vdGlwb3NfZmxvdydcblxudHlwZSBFc3RhZG8gPSB7XG4gIHRva2VuOiBUb2tlbiB8IHZvaWQsXG4gIHRva2VuRGVjb2RpZmljYWRvOiBUb2tlbkRlY29kaWZpY2FkbyB8IHZvaWQsXG4gIG1vc3RyYW5kb0F1dG9yZXM6IGJvb2xlYW4sXG4gIGF1dG9yZXM6IEFycmF5PEF1dG9yPlxufVxuXG50eXBlIEFjYW8gPSBcbiAge3R5cGU6ICdSRUdJU1RSRV9UT0tFTicsIHRva2VuOiBUb2tlbiwgdG9rZW5EZWNvZGlmaWNhZG86IFRva2VuRGVjb2RpZmljYWRvIH1cbnwgeyB0eXBlOiAnUkVDRUJBX05PVk9fVE9LRU4nLCB0b2tlbjogVG9rZW4gfVxufCB7IHR5cGU6ICdSRUdJU1RSRV9VU1VBUklPX1NBSVUnIH1cbnwgeyB0eXBlOiAnTU9TVFJFX0FVVE9SRVMnIH1cbnwgeyB0eXBlOiAnRVNDT05EQV9BVVRPUkVTJyB9XG5cbmNvbnN0IGVzdGFkb0luaWNpYWw6IEVzdGFkbyA9IHtcbiAgdG9rZW46IHVuZGVmaW5lZCxcbiAgdG9rZW5EZWNvZGlmaWNhZG86IHVuZGVmaW5lZCxcbiAgbW9zdHJhbmRvQXV0b3JlczogZmFsc2UsXG4gIGF1dG9yZXM6IFtdXG59XG5cbmNvbnN0IGF1dG9yZXM6IEF1dG9yW10gPSBbXG4gIHtcbiAgICBub21lOiBcIlRoYWlzIEdvdWxhcnQgRmlybWlub1wiLFxuICAgIG1hdHJpY3VsYTogMTcxMDM5NzNcbiAgfSxcbiAge1xuICAgIG5vbWU6IFwiQ2xlYmVydG9uIGRlIFNvdXphIE9saXZlaXJhXCIsXG4gICAgbWF0cmljdWxhOiAxNzIwNTA4M1xuICB9LFxuICB7XG4gICAgbm9tZTogXCJBbGNldSBSYW1vcyBDb25jZWnDp8OjbyBKw7puaW9yXCIsXG4gICAgbWF0cmljdWxhOiAxNDIwMDcyMFxuICB9LFxuICB7XG4gICAgbm9tZTogXCJQZWRybyBHYW5kcmEgRGVsbGEgR2l1c3RpbmFcIixcbiAgICBtYXRyaWN1bGE6IDE4MjAyNTM0XG4gIH0sXG4gIHtcbiAgICBub21lOiBcIlJhZmFlbCBOaWxzb24gV2l0dFwiLFxuICAgIG1hdHJpY3VsYTogMTgyMDA2NDlcbiAgfSxcblxuXVxuXG5mdW5jdGlvbiByZWR1Y2VyKGVzdGFkbzogRXN0YWRvLCBhY2FvOiBBY2FvKTogRXN0YWRvIHtcbiAgc3dpdGNoIChhY2FvLnR5cGUpIHtcbiAgY2FzZSAnUkVHSVNUUkVfVE9LRU4nOlxuICAgIHJldHVybiB7dG9rZW46IGFjYW8udG9rZW4sIHRva2VuRGVjb2RpZmljYWRvOiBhY2FvLnRva2VuRGVjb2RpZmljYWRvLCBtb3N0cmFuZG9BdXRvcmVzOiBmYWxzZSwgYXV0b3JlczogW119ICAgIFxuICBcbiAgY2FzZSAnUkVDRUJBX05PVk9fVE9LRU4nOiBcbiAgICByZXR1cm4ge3Rva2VuOiBhY2FvLnRva2VuLCB0b2tlbkRlY29kaWZpY2Fkbzogand0LmRlY29kZShhY2FvLnRva2VuKSwgbW9zdHJhbmRvQXV0b3JlczogZmFsc2UsIGF1dG9yZXM6IFtdfVxuICBcbiAgY2FzZSAnUkVHSVNUUkVfVVNVQVJJT19TQUlVJzpcbiAgICByZXR1cm4gZXN0YWRvSW5pY2lhbFxuXG4gIGNhc2UgJ01PU1RSRV9BVVRPUkVTJzpcbiAgICByZXR1cm4ge3Rva2VuOiBlc3RhZG8udG9rZW4sIHRva2VuRGVjb2RpZmljYWRvOiBlc3RhZG8udG9rZW5EZWNvZGlmaWNhZG8sIG1vc3RyYW5kb0F1dG9yZXM6IHRydWUsIGF1dG9yZXM6IGF1dG9yZXN9XG4gICAgICBcbiAgY2FzZSAnRVNDT05EQV9BVVRPUkVTJzpcbiAgICByZXR1cm4ge3Rva2VuOiBlc3RhZG8udG9rZW4sIHRva2VuRGVjb2RpZmljYWRvOiBlc3RhZG8udG9rZW5EZWNvZGlmaWNhZG8sIG1vc3RyYW5kb0F1dG9yZXM6IGZhbHNlLCBhdXRvcmVzOiBbXX1cbiAgICBcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJVRzogYWNhby50eXBlIGludsOhbGlkbzogJHthY2FvLnR5cGV9YClcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlblZhbGlkbyh0b2tlbkRlY29kaWZpY2FkbzogVG9rZW5EZWNvZGlmaWNhZG8pOiBib29sZWFuIHtcbiAgaWYodG9rZW5EZWNvZGlmaWNhZG8pIHsgXG4gICAgY29uc3QgYWdvcmE6IG51bWJlciA9IERhdGUubm93KClcbiAgICBjb25zdCBleHAgPSB0b2tlbkRlY29kaWZpY2Fkby5leHAgKiAxMDAwXG4gICAgcmV0dXJuIGFnb3JhIDwgZXhwXG4gIH0gZWxzZSB7XG4gICByZXR1cm4gZmFsc2VcbiAgfVxuICBcbn1cblxuLy8gRklYTUUgTsOjbyBow6EgbmFkZSBkZSBlcnJhZG8gY29tIGVzdGEgYXBsaWNhw6fDo28uIEEgdGFyZWZhIGNvbnNpc3RlIGVtXG4vLyBjb2xvY2FyIGEgYXBsaWNhw6fDo28gbmEgc3VhIG3DoXF1aW5hIHZpcnR1YWwgbmEgbnV2ZW0gZGEgVUZTQy5cblxuZnVuY3Rpb24gQXBwICgpIHtcbiAgY29uc3QgW2VzdGFkbywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBlc3RhZG9JbmljaWFsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgbGV0IHRva2VuRGVjb2RpZmljYWRvXG5cbiAgICBpZiAodG9rZW4gPT09IG51bGwpXG4gICAgICB0b2tlbiA9IHVuZGVmaW5lZFxuICAgIGVsc2Uge1xuICAgICAgdG9rZW5EZWNvZGlmaWNhZG8gPSBqd3QuZGVjb2RlKHRva2VuKVxuICAgICAgaWYgKHRva2VuVmFsaWRvKHRva2VuRGVjb2RpZmljYWRvKSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9UT0tFTicsIHRva2VuLCB0b2tlbkRlY29kaWZpY2Fkb30pXG4gICAgICBlbHNlXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXN0YWRvLnRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBlc3RhZG8udG9rZW4pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgfVxuICB9LCBbZXN0YWRvLnRva2VuXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgaXMtZmx1aWQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1oZWFkZXInPlxuICAgICAgICAgICAgVUZTQyAtIENUQyAtIElORSAtIElORTU2NDYgOjogQXBwIGxlbWJyZXRlcyA6OlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UtYm9keSc+XG4gICAgICAgICAgeyFlc3RhZG8ubW9zdHJhbmRvQXV0b3JlcyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24gaXMtd2FybmluZycgXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdNT1NUUkVfQVVUT1JFUyd9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1vc3RyYXIgYXV0b3Jlc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPExvZ2luIG9uVG9rZW49e3Rva2VuID0+IGRpc3BhdGNoKHt0eXBlOiAnUkVDRUJBX05PVk9fVE9LRU4nLCB0b2tlbn0pfVxuICAgICAgICAgICAgICAgIG9uU2FpdT17KCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9VU1VBUklPX1NBSVUnfSl9XG4gICAgICAgICAgICAgICAgdG9rZW49e2VzdGFkby50b2tlbn1cbiAgICAgICAgICAgICAgICB0b2tlbkRlY29kaWZpY2Fkbz17ZXN0YWRvLnRva2VuRGVjb2RpZmljYWRvfS8+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlc3RhZG8udG9rZW4gJiZcbiAgICAgICAgICAgICAgICAgIDxQdWJsaWNhTGVtYnJldGUgdG9rZW49e2VzdGFkby50b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2tlbkludmFsaWRvPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX1VTVUFSSU9fU0FJVSd9KX0vPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlc3RhZG8udG9rZW4gJiZcbiAgICAgICAgICAgICAgICAgIDxNb3N0cmFMZW1icmV0ZXMgdG9rZW49e2VzdGFkby50b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2tlbkludmFsaWRvPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX1VTVUFSSU9fU0FJVSd9KX0vPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEF1dG9yZXMgYXV0b3Jlcz17ZXN0YWRvLmF1dG9yZXN9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBpcy1zdWNjZXNzJyBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ0VTQ09OREFfQVVUT1JFUyd9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLy9AZmxvd1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7QXV0b3J9IGZyb20gJy4uL3RpcG9zX2Zsb3cnXG5cbmludGVyZmFjZSBBdXRvcmVzUHJvcHMge1xuICBhdXRvcmVzOiBBdXRvcltdXG59XG5cbmZ1bmN0aW9uIEF1dG9yZXMgKHByb3BzOiBBdXRvcmVzUHJvcHMpIHtcbiAgY29uc3Qge2F1dG9yZXN9ID0gcHJvcHNcblxuICBjb25zb2xlLmxvZyhhdXRvcmVzKVxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPGFiYnIgdGl0bGU9XCJOw7ptZXJvXCI+Tm8uPC9hYmJyPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoPk5vbWU8L3RoPlxuICAgICAgICAgIDx0aD5NYXRyw61jdWxhPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHthdXRvcmVzLm1hcCgoYXV0b3IsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgIDx0aD57aX08L3RoPlxuICAgICAgICAgICAgICA8dGQ+e2F1dG9yLm5vbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnthdXRvci5tYXRyaWN1bGF9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gXG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIClcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBBdXRvcmVzXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvL0BmbG93XG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHt8XG4gIGlkOiBzdHJpbmcsXG4gIHRleHRvOiBzdHJpbmcsXG4gIG9uRGVsZXRlOiBzdHJpbmcgPT4gdm9pZCAgICBcbnx9XG5cblxuZnVuY3Rpb24gb2J0ZW5oYVRleHRvKG1vc3RyYW5kbzogYm9vbGVhbiwgdGV4dG86IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBtb3N0cmFuZG8gPyAgJ09jdWx0YXInIDogYCR7dGV4dG8uc3Vic3RyaW5nKDAsMTApfS4uLmBcbn1cblxuXG5mdW5jdGlvbiBNb3N0cmFMZW1icmV0ZSAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFttb3N0cmFuZG8sIHNldE1vc3RyYW5kb10gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gIGZ1bmN0aW9uIGV4aWJhT3VPY3VsdGUoKSB7XG4gICAgc2V0TW9zdHJhbmRvKCFtb3N0cmFuZG8pXG4gIH1cblxuICBsZXQgY29udGV1ZG9cblxuICBpZiAobW9zdHJhbmRvKSB7XG4gICAgY29udGV1ZG8gPVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uIGlzLWluZm8nPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3RleHRhcmVhJyByZWFkT25seSB2YWx1ZT17cHJvcHMudGV4dG99Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWxpbmsnIFxuICAgICAgICAgICAgb25DbGljaz17ZXhpYmFPdU9jdWx0ZX0+XG4gICAgICAgICAgICB7b2J0ZW5oYVRleHRvKG1vc3RyYW5kbywgcHJvcHMudGV4dG8pfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtZGFuZ2VyJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25EZWxldGUocHJvcHMuaWQpfT5cbiAgICAgICAgICAgICAgQXBhZ2FyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICB9IGVsc2Uge1xuICAgIGNvbnRldWRvID1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWxpbmsgaXMtcm91bmRlZCcgb25DbGljaz17ZXhpYmFPdU9jdWx0ZX0+XG4gICAgICAgICAgICB7b2J0ZW5oYVRleHRvKG1vc3RyYW5kbywgcHJvcHMudGV4dG8pfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICB9XG4gIHJldHVybiAoXG4gICAgPHNwYW4+e2NvbnRldWRvfTwvc3Bhbj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1vc3RyYUxlbWJyZXRlXG4iLCIvL0BmbG93XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgbGVMZW1icmV0ZXMsIGFwYWdhTGVtYnJldGUgfSBmcm9tICcuLi9zZXJ2aWNvcydcbmltcG9ydCBNb3N0cmFMZW1icmV0ZSBmcm9tICcuL01vc3RyYUxlbWJyZXRlLmpzeCdcblxuaW1wb3J0IHR5cGUge1Rva2VuLCBMZW1icmV0ZX0gZnJvbSAnLi4vdGlwb3NfZmxvdydcblxudHlwZSBQcm9wcyA9IHt8IFxuICB0b2tlbjogVG9rZW4sXG4gIG9uVG9rZW5JbnZhbGlkbzogdm9pZCA9PiB2b2lkXG58fVxuXG50eXBlIEVzdGFkbyA9IHt8IFxuICBsZW1icmV0ZXM6IEFycmF5PExlbWJyZXRlPiB8IHZvaWQsXG4gIGlkTGVtYnJldGVBcGFnYXI6IHN0cmluZyB8IHZvaWQsXG4gIGxlbmRvOiBib29sZWFuXG58fVxuXG5jb25zdCBlc3RhZG9JbmljaWFsOiBFc3RhZG8gPSB7XG4gIGxlbWJyZXRlczogdW5kZWZpbmVkLFxuICBpZExlbWJyZXRlQXBhZ2FyOiB1bmRlZmluZWQsXG4gIGxlbmRvOiBmYWxzZVxufVxuXG5cbmZ1bmN0aW9uIE1vc3RyYUxlbWJyZXRlcyAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFtlc3RhZG86IEVzdGFkbywgc2V0RXN0YWRvXSA9IHVzZVN0YXRlKGVzdGFkb0luaWNpYWwpXG5cbiAgXG4gIGZ1bmN0aW9uIGFwYWdhVW1MZW1icmV0ZShpZExlbWJyZXRlKSB7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIGlkTGVtYnJldGVBcGFnYXI6IGlkTGVtYnJldGV9KVxuICB9XG5cbiAgZnVuY3Rpb24gbGVUb2Rvc0xlbWJyZXRlcygpIHtcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgbGVuZG86IHRydWV9KVxuICB9XG5cbiAgY29uc3Qgb25Ub2tlbkludmFsaWRvID0gcHJvcHMub25Ub2tlbkludmFsaWRvXG4gIGNvbnN0IHRva2VuID0gcHJvcHMudG9rZW5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlc3RhZG8uaWRMZW1icmV0ZUFwYWdhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcGFnYUxlbWJyZXRlKHRva2VuLCBlc3RhZG8uaWRMZW1icmV0ZUFwYWdhcilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChlc3RhZG8ubGVtYnJldGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbWJzID0gZXN0YWRvLmxlbWJyZXRlcy5maWx0ZXIobGVtYiA9PiBsZW1iLl9pZCAhPT0gZXN0YWRvLmlkTGVtYnJldGVBcGFnYXIpXG4gICAgICAgICAgICBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIGxlbWJyZXRlczogbGVtYnN9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBzZXRFc3RhZG8oZXN0YWRvSW5pY2lhbClcbiAgICAgICAgICBvblRva2VuSW52YWxpZG8oKVxuICAgICAgICB9KVxuXG4gICAgfVxuICB9LCBbZXN0YWRvLmlkTGVtYnJldGVBcGFnYXIsIGVzdGFkby5sZW1icmV0ZXMsIG9uVG9rZW5JbnZhbGlkbywgdG9rZW5dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVzdGFkby5sZW5kbykge1xuICAgICAgbGVMZW1icmV0ZXModG9rZW4pXG4gICAgICAgIC50aGVuKGxlbWJyZXRlcyA9PiBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIGxlbWJyZXRlc30pKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHNldEVzdGFkbyhlc3RhZG9JbmljaWFsKVxuICAgICAgICAgIG9uVG9rZW5JbnZhbGlkbygpXG4gICAgICAgIH0pXG4gICAgfVxuICB9LCBbZXN0YWRvLmxlbmRvLCBvblRva2VuSW52YWxpZG8sIHRva2VuXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWhlYWRlcic+TW9zdHJhciBMZW1icmV0ZXNcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1pbmZvJyBvbkNsaWNrPXtsZVRvZG9zTGVtYnJldGVzfT5cbiAgICAgICAgICBMZXIgTGVtYnJldGVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGVzdGFkby5sZW1icmV0ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZXN0YWRvLmxlbWJyZXRlcy5tYXAobCA9PlxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2wuX2lkfT5cbiAgICAgICAgICAgICAgICA8TW9zdHJhTGVtYnJldGUgaWQ9e2wuX2lkfVxuICAgICAgICAgICAgICAgICAgdGV4dG89e2wudGV4dG99XG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gYXBhZ2FVbUxlbWJyZXRlKGwuX2lkKX0vPlxuICAgICAgICAgICAgICA8L3NwYW4+KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgZXN0YWRvLmxlbWJyZXRlcyAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICBlc3RhZG8ubGVtYnJldGVzLmxlbmd0aCA9PSAwICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RpZmljYXRpb24gaXMtd2FybmluZyc+TsOjbyBow6EgbGVtYnJldGVzIHBhcmEgZXN0ZSB1c3XDoXJpby48L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1vc3RyYUxlbWJyZXRlc1xuIiwiLy9AZmxvd1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlciwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICogYXMgcyBmcm9tICcuLi9zZXJ2aWNvcydcblxuaW1wb3J0IHR5cGUge1Rva2VuLCBUb2tlbkRlY29kaWZpY2Fkb30gZnJvbSAnLi4vdGlwb3NfZmxvdydcblxudHlwZSBQcm9wcyA9IHt8IFxuICBvblRva2VuOiAodG9rZW46IFRva2VuKSA9PiB2b2lkLFxuICBvblNhaXU6ICgpID0+IHZvaWQsXG4gIHRva2VuOiBUb2tlbiB8IHZvaWQsXG4gIHRva2VuRGVjb2RpZmljYWRvOiBUb2tlbkRlY29kaWZpY2FkbyB8IHZvaWRcbnx9XG5cbnR5cGUgRXN0YWRvID0ge3xcbiAgbG9naW46IHN0cmluZyxcbiAgc2VuaGE6IHN0cmluZyxcbiAgY29uZmVyZVNlbmhhOiBzdHJpbmcsXG4gIG5vdm9Vc3VhcmlvOiBib29sZWFuLFxuICBub21lQm90YW86ICdFbnRyYXInIHwgJ0NhZGFzdHJhciBOb3ZvIFVzdcOhcmlvJyxcbiAgZmF6ZW5kbzogJ25hZGEnIHwgJ2xvZ2luJyB8ICdjYWRhc3RybycgfCAgJ2xvZ291dCcsXG4gIG1zZzogc3RyaW5nIHwgdm9pZCAgXG58fVxuXG50eXBlIEFjYW8gPVxuICAgIHt8IHR5cGU6ICdSRUdJU1RSRV9MT0dJTicsIGxvZ2luOiBzdHJpbmcgfH1cbiAgfCB7fCB0eXBlOiAnUkVHSVNUUkVfU0VOSEEnLCBzZW5oYTogc3RyaW5nIHx9XG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0NPTkZFUkVfU0VOSEEnLCBjb25mZXJlU2VuaGE6IHN0cmluZyB8fVxuICB8IHt8IHR5cGU6ICdSRUdJU1RSRV9OT1ZPX1VTVUFSSU8nLCBub3ZvVXN1YXJpbzogYm9vbGVhbiB8fVxuICB8IHt8IHR5cGU6ICdGQUNBX0xPR09VVCd8fVxuICB8IHt8IHR5cGU6ICdGQUNBX0xPR0lOX09VX0NBREFTVFJPJyB8fVxuICB8IHt8IHR5cGU6ICdSRUdJU1RSRV9MT0dJTl9PSycgfH1cbiAgfCB7fCB0eXBlOiAnUkVHSVNUUkVfTE9HSU5fTk9LJywgIG1vdGl2bzogc3RyaW5nIHx9XG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0NBREFTVFJPX09LJyB8fVxuICB8IHt8IHR5cGU6ICdSRUdJU1RSRV9DQURBU1RST19OT0snLCAgbW90aXZvOiBzdHJpbmcgfH1cblxuY29uc3QgZXN0YWRvSW5pY2lhbDogRXN0YWRvID0ge1xuICBsb2dpbjogJycsXG4gIHNlbmhhOiAnJyxcbiAgY29uZmVyZVNlbmhhOiAnJyxcbiAgbm92b1VzdWFyaW86IGZhbHNlLFxuICBub21lQm90YW86ICdFbnRyYXInLFxuICBmYXplbmRvOiAnbmFkYScsXG4gIG1zZzogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoZXN0YWRvOiBFc3RhZG8sIGFjYW86IEFjYW8pOiBFc3RhZG8ge1xuICBzd2l0Y2ggKGFjYW8udHlwZSkge1xuICBjYXNlICdSRUdJU1RSRV9MT0dJTic6XG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIGxvZ2luOiBhY2FvLmxvZ2luLCBzZW5oYTogJycsIGNvbmZlcmVTZW5oYTogJycsIG1zZzogdW5kZWZpbmVkfVxuICBcbiAgY2FzZSAnUkVHSVNUUkVfU0VOSEEnOlxuICAgIHJldHVybiB7Li4uZXN0YWRvLCBzZW5oYTogYWNhby5zZW5oYSwgbXNnOiB1bmRlZmluZWR9XG5cbiAgY2FzZSAnUkVHSVNUUkVfQ09ORkVSRV9TRU5IQSc6XG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIGNvbmZlcmVTZW5oYTogYWNhby5jb25mZXJlU2VuaGEsIG1zZzogdW5kZWZpbmVkfVxuXG4gIGNhc2UgJ1JFR0lTVFJFX05PVk9fVVNVQVJJTyc6IHtcbiAgICBjb25zdCBub21lQm90YW8gPSBhY2FvLm5vdm9Vc3VhcmlvID8gJ0NhZGFzdHJhciBOb3ZvIFVzdcOhcmlvJyA6ICdFbnRyYXInXG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIG5vdm9Vc3VhcmlvOiBhY2FvLm5vdm9Vc3VhcmlvLCBub21lQm90YW8sIG1zZzogdW5kZWZpbmVkfVxuICB9XG4gIFxuICBjYXNlICdGQUNBX0xPR09VVCc6XG4gICAgcmV0dXJuIHsuLi5lc3RhZG9JbmljaWFsLCBmYXplbmRvOiAnbG9nb3V0J31cblxuICBjYXNlICdGQUNBX0xPR0lOX09VX0NBREFTVFJPJzoge1xuICAgIGlmIChlc3RhZG8ubG9naW4gPT09ICcnKVxuICAgICAgcmV0dXJuIHsuLi5lc3RhZG8sIG1zZzogJ0xvZ2luIG7Do28gZGVmaW5pZG8uJ31cbiAgICBlbHNlIGlmIChlc3RhZG8ubm92b1VzdWFyaW8pIHtcbiAgICAgIGlmIChlc3RhZG8uc2VuaGEgPT09ICcnIHx8IGVzdGFkby5jb25mZXJlU2VuaGEgPT09ICcnKVxuICAgICAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiAnU2VuaGEgbsOjbyBkZWZpbmlkYS4nfVxuICAgICAgZWxzZSBpZiAoZXN0YWRvLnNlbmhhICE9PSBlc3RhZG8uY29uZmVyZVNlbmhhKVxuICAgICAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiAnU2VuaGFzIG7Do28gc8OjbyBpZ3VhaXMuJ31cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gey4uLmVzdGFkbywgZmF6ZW5kbzogJ2NhZGFzdHJvJywgbXNnOiAnRmF6ZW5kbyBjYWRhc3Ryby4uLid9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlc3RhZG8uc2VuaGEgPT09ICcnKVxuICAgICAgcmV0dXJuIHsuLi5lc3RhZG8sIG1zZzogJ1NlbmhhIG7Do28gZGVmaW5pZGEnfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHsuLi5lc3RhZG8sIGZhemVuZG86ICdsb2dpbicsIG1zZzogJ0ZhemVuZG8gbG9naW4uLi4nfVxuICAgIH1cbiAgfVxuXG4gIGNhc2UgJ1JFR0lTVFJFX0xPR0lOX09LJzpcbiAgICByZXR1cm4gey4uLmVzdGFkbyAsIG1zZzogdW5kZWZpbmVkLCBmYXplbmRvOiAnbmFkYSd9XG5cbiAgY2FzZSAnUkVHSVNUUkVfTE9HSU5fTk9LJzpcbiAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiBhY2FvLm1vdGl2bywgZmF6ZW5kbzogJ25hZGEnfVxuXG4gIGNhc2UgJ1JFR0lTVFJFX0NBREFTVFJPX09LJzpcbiAgICByZXR1cm4gey4uLmVzdGFkbyAsIG1zZzogdW5kZWZpbmVkLCBmYXplbmRvOiAnbmFkYSd9XG4gICAgXG4gIGNhc2UgJ1JFR0lTVFJFX0NBREFTVFJPX05PSyc6XG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIG1zZzogYWNhby5tb3Rpdm8sIGZhemVuZG86ICduYWRhJ31cbiAgICBcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJVRzogYWNhby50eXBlIGludsOhbGlkbzogJHthY2FvLnR5cGV9YClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIExvZ2luIChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW2VzdGFkbywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBlc3RhZG9JbmljaWFsKVxuXG4gIFxuICBmdW5jdGlvbiBsb2dpbihldikge1xuICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfTE9HSU4nLCBsb2dpbjogZXYudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmhhKGV2KSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9TRU5IQScsIHNlbmhhOiBldi50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmVyZVNlbmhhKGV2KSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9DT05GRVJFX1NFTkhBJywgY29uZmVyZVNlbmhhOiBldi50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgZnVuY3Rpb24gbm92b1VzdWFyaW8oKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9OT1ZPX1VTVUFSSU8nLCBub3ZvVXN1YXJpbzogIWVzdGFkby5ub3ZvVXN1YXJpb30pXG4gIH1cblxuICBmdW5jdGlvbiBmYWNhTG9naW5PdUNhZGFzdHJvKCkge1xuICAgIGRpc3BhdGNoKHt0eXBlOiAnRkFDQV9MT0dJTl9PVV9DQURBU1RSTyd9KVxuICB9XG5cbiAgZnVuY3Rpb24gZmFjYUxvZ291dCgpIHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBQ0FfTE9HT1VUJ30pXG4gIH1cblxuICBjb25zdCBvblRva2VuID0gcHJvcHMub25Ub2tlblxuICBjb25zdCBvblNhaXUgPSBwcm9wcy5vblNhaXVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN3aXRjaCAoZXN0YWRvLmZhemVuZG8pIHtcbiAgICBjYXNlICdsb2dpbic6XG4gICAgICBzLmZhekxvZ2luKGVzdGFkby5sb2dpbiwgZXN0YWRvLnNlbmhhKVxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9MT0dJTl9PSyd9KVxuICAgICAgICAgIG9uVG9rZW4odG9rZW4pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvID0+IGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfTE9HSU5fTk9LJywgbW90aXZvOiBlcnJvLm1lc3NhZ2V9KSlcbiAgICAgIGJyZWFrXG4gICAgXG4gICAgY2FzZSAnY2FkYXN0cm8nOlxuICAgICAgcy5mYXpDYWRhc3Rybyhlc3RhZG8ubG9naW4sIGVzdGFkby5zZW5oYSlcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfQ0FEQVNUUk9fT0snfSlcbiAgICAgICAgICBvblRva2VuKHRva2VuKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJybyA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX0NBREFTVFJPX05PSycsIG1vdGl2bzogZXJyby5tZXNzYWdlfSkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgIG9uU2FpdSgpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAnbmFkYSc6XG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gICAgfVxuICBcbiAgfSwgW2VzdGFkby5mYXplbmRvLCBlc3RhZG8ubG9naW4sIGVzdGFkby5zZW5oYSwgb25Ub2tlbiwgb25TYWl1XSlcblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgbGV0IGNvbnRldWRvXG4gIGlmIChwcm9wcy50b2tlbkRlY29kaWZpY2FkbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV1ZG8gPVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSBpcy1saW5rJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1oZWFkZXInPkxvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UtYm9keSc+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8ubm92b1VzdWFyaW99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e25vdm9Vc3VhcmlvfS8+bm92byB1c3XDoXJpb1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5Mb2dpbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8ubG9naW59IG9uQ2hhbmdlPXtsb2dpbn0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnPlNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0JyB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8uc2VuaGF9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VuaGF9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXN0YWRvLm5vdm9Vc3VhcmlvICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+UmVwaXRhIFNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0JyB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8uY29uZmVyZVNlbmhhfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NvbmZlcmVTZW5oYX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtbGluaycgb25DbGljaz17ZmFjYUxvZ2luT3VDYWRhc3Ryb30+XG4gICAgICAgICAgICAgIHtlc3RhZG8ubm9tZUJvdGFvfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVzdGFkby5tc2cgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RpZmljYXRpb24gaXMtd2FybmluZyc+e2VzdGFkby5tc2d9PC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICB9IGVsc2Uge1xuICAgIGNvbnRldWRvID1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UgaXMtaW5mbyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UtaGVhZGVyJz5cbiAgICAgICAgICAgIFVzdcOhcmlvIGxvZ2Fkbzoge3Byb3BzLnRva2VuRGVjb2RpZmljYWRvLmxvZ2lufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWJvZHknPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1saW5rJyBvbkNsaWNrPXtmYWNhTG9nb3V0fT5TYWlyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2NvbnRldWRvfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiIsIi8vQGZsb3dcblxuLy8gLS0tLS1cbi8vIGltcGxlbWVudGEgYWNlc3NvIGEgc2VydmnDp29zIGRpc3BvbsOtdmVpcyBubyBsYWRvIHNlcnZpZG9yXG4vLyAtLS0tLVxuXG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gJy4vdGlwb3NfZmxvdydcblxuYXN5bmMgZnVuY3Rpb24gZmF6Q2FkYXN0cm8gKGxvZ2luOiBzdHJpbmcsIHNlbmhhOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZXhlY3V0YVBPU1QoJy9jbWRGYWNhQ2FkYXN0cm8nLCB7IGxvZ2luLCBzZW5oYSB9KVxuICBpZiAocmVzcG9zdGEub2spIHsgcmV0dXJuIHJlc3Bvc3RhLnRva2VuIH0gZWxzZSB7IHRocm93IG5ldyBFcnJvcihyZXNwb3N0YS5tZXNzYWdlKSB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZhekxvZ2luIChsb2dpbjogc3RyaW5nLCBzZW5oYTogc3RyaW5nKTogUHJvbWlzZTxUb2tlbj4ge1xuICBsZXQgcmVzcG9zdGEgPSBhd2FpdCBleGVjdXRhUE9TVCgnL2NtZEZhY2FMb2dpbicsIHsgbG9naW4sIHNlbmhhIH0pXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4gcmVzcG9zdGEudG9rZW4gfSBlbHNlIHsgdGhyb3cgbmV3IEVycm9yKHJlc3Bvc3RhLm1lc3NhZ2UpIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHVibGljYUxlbWJyZXRlICh0ZXh0bzogc3RyaW5nLCB0b2tlbjogVG9rZW4pIHtcbiAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZXhlY3V0YVBPU1QoJy9jbWRQdWJsaXF1ZUxlbWJyZXRlJywgeyB0ZXh0bywgdG9rZW4gfSlcbiAgaWYgKHJlc3Bvc3RhLm9rKSB7IHJldHVybiB7IG9rOiB0cnVlIH0gfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkbycpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxlTGVtYnJldGVzICh0b2tlbjogVG9rZW4pIHtcbiAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZXhlY3V0YUdFVCgnL3FyeUxlaWFMZW1icmV0ZXMnLCB7IHRva2VuIH0pXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4gcmVzcG9zdGEubGVtYnJldGVzIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd0b2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8nKVxufVxuXG5hc3luYyBmdW5jdGlvbiBhcGFnYUxlbWJyZXRlICh0b2tlbjogVG9rZW4sIGlkTGVtYnJldGU6IHN0cmluZykge1xuICBsZXQgcmVzcG9zdGEgPSBhd2FpdCBleGVjdXRhREVMRVRFKCcvY21kQXBhZ3VlTGVtYnJldGUnLCB7IGlkTGVtYnJldGUsIHRva2VuIH0pXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4geyBvazogdHJ1ZSB9IH1cbiAgdGhyb3cgbmV3IEVycm9yKCd0b2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8nKVxufVxuXG5mdW5jdGlvbiBleGVjdXRhUE9TVCAoY2FtaW5obywgZGFkb3MpIHtcbiAgcmV0dXJuIGV4ZWN1dGFQT1NUT1VERUxFVEUoJ1BPU1QnLCBjYW1pbmhvLCBkYWRvcylcbn1cblxuZnVuY3Rpb24gZXhlY3V0YURFTEVURSAoY2FtaW5obywgZGFkb3MpIHtcbiAgcmV0dXJuIGV4ZWN1dGFQT1NUT1VERUxFVEUoJ0RFTEVURScsIGNhbWluaG8sIGRhZG9zKVxufVxuXG5mdW5jdGlvbiBleGVjdXRhUE9TVE9VREVMRVRFIChtZXRvZG8sIGNhbWluaG8sIGRhZG9zKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBtZXRob2Q6IG1ldG9kbyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYWRvcylcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZmV0Y2goY2FtaW5obywgcGFyYW1zKVxuICAgIC50aGVuKHJlc3Bvc3RhID0+IHtcbiAgICAgIGlmICghcmVzcG9zdGEub2spIHsgdGhyb3cgbmV3IEVycm9yKCdGYWxoYSBuYSBjb211bmljYcOnw6NvIGNvbSBzZXJ2aWRvcicpIH1cbiAgICAgIHJldHVybiByZXNwb3N0YVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9zdGEgPT4gcmVzcG9zdGEuanNvbigpKVxufVxuXG5mdW5jdGlvbiBleGVjdXRhR0VUIChjYW1pbmhvLCBkYWRvcykge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9XG4gIGNvbnN0IGNvcnBvID0gSlNPTi5zdHJpbmdpZnkoZGFkb3MpXG4gIHJldHVybiB3aW5kb3cuZmV0Y2goYCR7Y2FtaW5ob30/ZGFkb3M9JHtjb3Jwb31gLCBwYXJhbXMpXG4gICAgLnRoZW4ocmVzcG9zdGEgPT4ge1xuICAgICAgaWYgKCFyZXNwb3N0YS5vaykgeyB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIG5hIGNvbXVuaWNhw6fDo28gY29tIHNlcnZpZG9yJykgfVxuICAgICAgcmV0dXJuIHJlc3Bvc3RhXG4gICAgfSlcbiAgICAudGhlbihyZXNwb3N0YSA9PiByZXNwb3N0YS5qc29uKCkpXG59XG5cbmV4cG9ydCB7IGZhekxvZ2luLCBmYXpDYWRhc3RybywgcHVibGljYUxlbWJyZXRlLCBsZUxlbWJyZXRlcywgYXBhZ2FMZW1icmV0ZSB9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXcvQXBwLmpzeCdcblxuY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZWxlbSkiXSwic291cmNlUm9vdCI6IiJ9