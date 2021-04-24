'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\SEM 7\\BTech Project\\MediSecure-master\\components\\Header.js';


var HeaderFile = function (_Component) {
  (0, _inherits3.default)(HeaderFile, _Component);

  function HeaderFile() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderFile.__proto__ || (0, _getPrototypeOf2.default)(HeaderFile)).call.apply(_ref, [this].concat(args))), _this), _this.onClickMyDocs = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/documents/my/' + address);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onClickMyReceivedDocs = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/documents/my/received/' + address);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onClickUsers = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/users/allUsers/' + address);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderFile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'heartbeat', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), 'MediSecure ')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'purple', className: 'item', onClick: this.onClickUsers, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'All Users'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'red', className: 'item', onClick: this.onClickMyDocs, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Self Created Reports'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'violet', className: 'item', onClick: this.onClickMyReceivedDocs, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Reports Received for Updates'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'green', className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'All Reports'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })))), _react2.default.createElement(_routes.Link, { route: '/documents/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Create New Report', icon: 'add circle', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))));
    }
  }]);

  return HeaderFile;
}(_react.Component);

exports.default = HeaderFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJCdXR0b24iLCJJY29uIiwiTGFiZWwiLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIkhlYWRlckZpbGUiLCJvbkNsaWNrTXlEb2NzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhZGRyZXNzIiwicHVzaFJvdXRlIiwib25DbGlja015UmVjZWl2ZWREb2NzIiwib25DbGlja1VzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFNLEFBQU8sQUFBTTs7QUFDM0IsQUFBUSxBQUFLLEFBQWE7O0FBQzFCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFHWDs7Ozs7Ozs7Ozs7Ozs7O29OLEFBRUo7MkZBQWdCLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDZDtzQkFEYyxBQUNkLEFBQU07Z0NBRFE7dUJBRVMsY0FBQSxBQUFLLElBRmQsQUFFUyxBQUFTOzttQkFBMUI7QUFGUSxvQ0FHUjtBQUhRLDBCQUdFLFNBSEYsQUFHRSxBQUFTLEFBQ3pCOzsrQkFBQSxBQUFPLDZCQUpPLEFBSWQsQUFBa0M7O21CQUpwQjttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7OztlLEFBT2hCOzJGQUF3QixrQkFBQSxBQUFPLE9BQVA7c0JBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ3RCO3NCQURzQixBQUN0QixBQUFNO2lDQURnQjt1QkFFQyxjQUFBLEFBQUssSUFGTixBQUVDLEFBQVM7O21CQUExQjtBQUZnQixxQ0FHaEI7QUFIZ0IsMEJBR04sU0FITSxBQUdOLEFBQVMsQUFDekI7OytCQUFBLEFBQU8sc0NBSmUsQUFJdEIsQUFBMkM7O21CQUpyQjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7OztlLEFBT3hCOzJGQUFlLGtCQUFBLEFBQU8sT0FBUDtzQkFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDYjtzQkFEYSxBQUNiLEFBQU07aUNBRE87dUJBRVUsY0FBQSxBQUFLLElBRmYsQUFFVSxBQUFTOzttQkFBMUI7QUFGTyxxQ0FHUDtBQUhPLDBCQUdHLFNBSEgsQUFHRyxBQUFTLEFBQ3pCOzsrQkFBQSxBQUFPLCtCQUpNLEFBSWIsQUFBb0M7O21CQUp2QjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7Ozs7Ozs7OzZCQU1OLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSxPQUFQLEFBQWEsVUFBUyxNQUF0QixBQUEyQjtvQkFBM0I7c0JBQUEsQUFBa0M7QUFBbEM7eUJBQWtDLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFsQyxBQUFrQztBQUFBO1VBRnRDLEFBQ0UsQUFDRSxBQUVGLGlDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxVQUF4QixNQUFpQyxPQUFqQyxBQUF1QyxVQUFTLFdBQWhELEFBQTBELFFBQU8sU0FBUyxLQUExRSxBQUErRTtvQkFBL0U7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsOEJBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUpKLEFBQ0EsQUFFRSxBQUNFLEFBSUo7QUFKSTs0QkFJSixBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxVQUF4QixNQUFpQyxPQUFqQyxBQUF1QyxPQUFNLFdBQTdDLEFBQXVELFFBQU8sU0FBUyxLQUF2RSxBQUE0RTtvQkFBNUU7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EseUNBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQVhKLEFBUUEsQUFFRSxBQUNFLEFBSUo7QUFKSTs0QkFJSixBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxVQUF4QixNQUFpQyxPQUFqQyxBQUF1QyxVQUFTLFdBQWhELEFBQTBELFFBQU8sU0FBUyxLQUExRSxBQUErRTtvQkFBL0U7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsaURBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQWxCSixBQWVBLEFBRUUsQUFDRSxBQUlKO0FBSkk7NEJBSUosQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sVUFBUixBQUFpQixRQUFPLFVBQXhCLE1BQWlDLE9BQWpDLEFBQXVDLFNBQVEsV0FBL0MsQUFBeUQ7b0JBQXpEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLGdDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkExQk4sQUFzQkEsQUFDRSxBQUVFLEFBQ0UsQUFLTjtBQUxNOzZCQUtOLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IscUJBQW9CLE1BQXBDLEFBQXlDLGNBQWEsU0FBdEQ7b0JBQUE7c0JBckNOLEFBQ0UsQUFJRSxBQStCQSxBQUNFLEFBTVA7QUFOTzs7Ozs7O0FBVVYsQSxBQXRFeUI7O2tCQXNFekIsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiRTovU0VNIDcvQlRlY2ggUHJvamVjdC9NZWRpU2VjdXJlLW1hc3RlciJ9