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

var _reactPdf = require('react-pdf');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _fileinstance = require('../../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _semanticUiReact = require('semantic-ui-react');

var _UploadForm = require('../../components/UploadForm');

var _UploadForm2 = _interopRequireDefault(_UploadForm);

var _fileSaver = require('file-saver');

var _ipfs = require('../../ipfs/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\SEM 7\\BTech Project\\MediSecure-master\\pages\\documents\\show.js?entry';


var DocumentShow = function (_Component) {
  (0, _inherits3.default)(DocumentShow, _Component);

  function DocumentShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DocumentShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DocumentShow.__proto__ || (0, _getPrototypeOf2.default)(DocumentShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      account: '',
      owner: '',
      receiver: '',
      add: '',
      nameR: '',
      loading: false,
      errorMessage: ''
    }, _this.onDownload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var fileBuf, blob;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              /*const chunks = [];
              for await (const chunk of ipfs.cat(ipfsHash)) {
                chunks.push(chunk)
              }
              console.log(Buffer.concat(chunks).toString())*/
              _context.next = 3;
              return _ipfs2.default.cat(_this.props.fileHash);

            case 3:
              fileBuf = _context.sent;
              blob = new Blob([fileBuf]);

              try {
                (0, _fileSaver.saveAs)(blob, _this.props.fileName);
              } catch (e) {
                console.log(e);
              }

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onShare = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var fileInstance, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                fileInstance = (0, _fileinstance2.default)(_this.props.address);

                console.log(_this.props.address);
                console.log(_this.state.addR);
                console.log(_this.state.nameR);
                _this.setState({ loading: true, errorMessage: '' });
                _context2.prev = 6;
                _context2.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context2.sent;
                _context2.next = 12;
                return fileInstance.methods.setReceiver(_this.state.addR, _this.state.nameR).send({
                  from: accounts[0]
                });

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](6);

                _this.setState({ errorMessage: _context2.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[6, 14]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DocumentShow, [{
    key: 'componentDidMount',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var accounts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;

                this.setState({ owner: this.props.fileOwner, receiver: this.props.receiver[0] });
                this.setState({ account: accounts[0] });
                if (this.state.owner == this.state.account || this.state.receiver == this.state.account) {
                  this.setState({ visible: true });
                }

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Document Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal, { animated: 'move right', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        color: 'red',
        header: this.props.fileName,
        extra: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, 'File Hash: ', this.props.fileHash, ' '),
        meta: 'File Name',
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }), ' Created On: ', this.props.date),
        style: { overflowWrap: 'break-word' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_semanticUiReact.Card, {
        color: 'red',
        header: this.props.fileOwnerName,
        meta: 'Owner Name',
        extra: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, 'Owner Address: ', this.props.fileOwner, ' '),
        style: { overflowWrap: 'break-word' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), _react2.default.createElement(_semanticUiReact.Reveal.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'red', icon: true, labelPosition: 'left', style: { marginTop: '50px', marginLeft: '80px' }, href: this.props.fileURL, download: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), 'View File'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { style: this.state.visible ? { display: 'none' } : {}, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', basic: true, color: 'red', pointing: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), ' You cannot make changes to this file...!!')), _react2.default.createElement('div', { style: this.state.visible ? {} : { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'medium', basic: true, color: 'green', pointing: 'below', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, 'Make changes to this file here!!', _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), _react2.default.createElement(_UploadForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })))), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '50px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', style: { marginRight: '10px' }, onClick: this.onDownload, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'download', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), 'Download File'), _react2.default.createElement(_routes.Link, { route: '/documents/' + this.props.address + '/versions', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'truck', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), 'Track Update History'))), _react2.default.createElement(_semanticUiReact.Segment, { style: this.state.account == this.state.owner ? {} : { display: 'none' }, basic: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'To share file for editing purpose')), _react2.default.createElement(_semanticUiReact.Form, { style: this.state.account == this.state.owner ? {} : { display: 'none' }, onSubmit: this.onShare, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, 'Receiver Name'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Receiver Name', value: this.state.nameR, onChange: function onChange(event) {
          _this3.setState({ nameR: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, 'Receiver Address'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Receiver Address', value: this.state.addR, onChange: function onChange(event) {
          _this3.setState({ addR: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, heading: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'certificate', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), 'Share File')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var fileInstance, summary, receiver, address, fileName, fileHash, fileOwnerName, date, fileOwner;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                fileInstance = (0, _fileinstance2.default)(props.query.address);
                _context4.next = 3;
                return fileInstance.methods.getSummary().call();

              case 3:
                summary = _context4.sent;
                _context4.next = 6;
                return fileInstance.methods.getReceiver().call();

              case 6:
                receiver = _context4.sent;
                address = props.query.address;
                fileName = summary[0];
                fileHash = summary[1];
                fileOwnerName = summary[3];
                date = summary[2];
                fileOwner = summary[4];
                return _context4.abrupt('return', {
                  address: address,
                  fileName: fileName,
                  fileHash: fileHash,
                  date: date,
                  fileOwnerName: fileOwnerName,
                  fileURL: "https://ipfs.infura.io/ipfs/" + summary[1],
                  fileOwner: fileOwner,
                  receiver: receiver
                });

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x2) {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DocumentShow;
}(_react.Component);

exports.default = DocumentShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkb2N1bWVudHNcXHNob3cuanMiXSwibmFtZXMiOlsicmVhY3QiLCJDb21wb25lbnQiLCJEb2N1bWVudCIsIlBhZ2UiLCJMYXlvdXQiLCJGaWxlSW5zdGFuY2UiLCJDYXJkIiwiUmV2ZWFsIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiR3JpZCIsIkljb24iLCJMYWJlbCIsIkZvcm0iLCJNZXNzYWdlIiwiSW5wdXQiLCJTZWdtZW50IiwiRGl2aWRlciIsIlVwbG9hZEZvcm0iLCJzYXZlQXMiLCJpcGZzIiwiTGluayIsIndlYjMiLCJEb2N1bWVudFNob3ciLCJzdGF0ZSIsInZpc2libGUiLCJhY2NvdW50Iiwib3duZXIiLCJyZWNlaXZlciIsImFkZCIsIm5hbWVSIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uRG93bmxvYWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2F0IiwicHJvcHMiLCJmaWxlSGFzaCIsImZpbGVCdWYiLCJibG9iIiwiQmxvYiIsImZpbGVOYW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlIiwiZmlsZUluc3RhbmNlIiwiYWRkcmVzcyIsImFkZFIiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0UmVjZWl2ZXIiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJmaWxlT3duZXIiLCJkYXRlIiwib3ZlcmZsb3dXcmFwIiwiZmlsZU93bmVyTmFtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJmaWxlVVJMIiwiZGlzcGxheSIsIm1hcmdpblJpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImdldFJlY2VpdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFVOztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFRLEFBQU0sQUFBTyxBQUFPLEFBQVcsQUFBTSxBQUFNLEFBQU8sQUFBTSxBQUFTLEFBQU8sQUFBUzs7QUFDekYsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7ZUFBUSxBQUNJLEFBQ1Y7ZUFGTSxBQUVJLEFBQ1Y7YUFITSxBQUdDLEFBQ1A7Z0JBSk0sQUFJSSxBQUNWO1dBTE0sQUFLRixBQUNKO2FBTk0sQUFNQSxBQUNOO2VBUE0sQUFPRyxBQUNUO29CLEFBUk0sQUFRTztBQVJQLEFBQ04sYSxBQXdDRixzRkFBYSxtQkFBQTttQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDWDtvQkFBQSxBQUFNLEFBQ047QUFGVzs7Ozs7OEJBQUE7cUJBT1csZUFBQSxBQUFLLElBQUksTUFBQSxBQUFLLE1BUHpCLEFBT1csQUFBb0I7O2lCQUFwQztBQVBLLGlDQVFMO0FBUksscUJBUUUsSUFBQSxBQUFJLEtBQUssQ0FSWCxBQVFFLEFBQVMsQUFBQyxBQUN2Qjs7a0JBQUksQUFDQTt1Q0FBQSxBQUFPLE1BQUssTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQzFCO0FBRkQsZ0JBRUUsT0FBQSxBQUFPLEdBQUcsQUFDVjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBYlU7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZSxBQWtCYjsyRkFBVSxrQkFBQSxBQUFNLE9BQU47MEJBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ1I7c0JBQUEsQUFBTSxBQUNBO0FBRkUsK0JBRWEsNEJBQWEsTUFBQSxBQUFLLE1BRi9CLEFBRWEsQUFBd0IsQUFDN0M7O3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2Qjt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBTnRCLEFBTVIsQUFBYyxBQUE2QjtpQ0FObkM7aUNBQUE7dUJBUW1CLGNBQUEsQUFBSyxJQVJ4QixBQVFtQixBQUFTOzttQkFBMUI7QUFSRixxQ0FBQTtpQ0FBQTtvQ0FVRSxBQUFhLFFBQWIsQUFBcUIsWUFBWSxNQUFBLEFBQUssTUFBdEMsQUFBNEMsTUFBSyxNQUFBLEFBQUssTUFBdEQsQUFBNEQsT0FBNUQsQUFBbUU7d0JBQ2xFLFNBWEgsQUFVRSxBQUF3RSxBQUN2RSxBQUFTO0FBRDhELEFBQzVFLGlCQURJOzttQkFWRjtpQ0FBQTtBQUFBOzttQkFBQTtpQ0FBQTtrREFjSjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxhQWR4QixBQWNKLEFBQWMsQUFBa0I7O21CQUVsQztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWhCVCxBQWdCTixBQUFjLEFBQVM7O21CQWhCakI7bUJBQUE7aUNBQUE7O0FBQUE7a0NBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFCZSxjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBLHFDQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLEtBQUEsQUFBSyxNQUFaLEFBQWtCLFdBQVUsVUFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQTlELEFBQWMsQUFBcUMsQUFBb0IsQUFDdkU7cUJBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUSxTQUF2QixBQUFjLEFBQVMsQUFBUyxBQUNoQztvQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQU8sS0FBQSxBQUFLLE1BQXhCLEFBQThCLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFVLEtBQUEsQUFBSyxNQUF0RSxBQUE0RSxTQUFVLEFBQ3BGO3VCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFTLEFBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXdDSzttQkFFTjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sVUFBUixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2VBQUQsQUFDVSxBQUNSO2dCQUFXLEtBQUEsQUFBSyxNQUZsQixBQUV3QixBQUN0QjsrQkFBUyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUFrQixvQkFBQSxBQUFLLE1BQXZCLEFBQTZCLFVBSHhDLEFBR1csQUFDVDtjQUpGLEFBSVMsQUFDUDtxQ0FBZSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBOztzQkFBSzt3QkFBTCxBQUFLO0FBQUE7QUFBQSxZQUFtQixzQkFBQSxBQUFLLE1BTDlDLEFBS2lCLEFBQW1DLEFBQ2xEO2VBQVEsRUFBRSxjQU5aLEFBTVUsQUFBZ0I7O29CQU4xQjtzQkFERixBQUNFLEFBUUE7QUFSQTtBQUNFLDBCQU9GLEFBQUM7ZUFBRCxBQUNVLEFBQ1I7Z0JBQVUsS0FBQSxBQUFLLE1BRmpCLEFBRXVCLEFBQ3JCO2NBSEYsQUFHUyxBQUNQOytCQUFTLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQXFCLHdCQUFBLEFBQUssTUFBMUIsQUFBZ0MsV0FKM0MsQUFJVyxBQUNUO2VBQVEsRUFBRSxjQUxaLEFBS1UsQUFBZ0I7O29CQUwxQjtzQkFWSixBQUNFLEFBU0UsQUFRRjtBQVJFO0FBQ0UsMkJBT0gsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsNENBQVUsT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixPQUFNLE1BQTdCLE1BQWtDLGVBQWxDLEFBQWdELFFBQU8sT0FBTyxFQUFDLFdBQUQsQUFBVyxRQUFPLFlBQWhGLEFBQThELEFBQTZCLFVBQVMsTUFBTSxLQUFBLEFBQUssTUFBL0csQUFBcUgsU0FBUyxVQUE5SDtvQkFBQTtzQkFBQSxBQUF1STtBQUF2STt5QkFBdUksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQXZJLEFBQXVJO0FBQUE7VUF0QmpKLEFBQ0UsQUFDRSxBQWtCRSxBQUNFLEFBQ0UsQUFLUixrQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLEVBQUUsU0FBdkIsQUFBcUIsQUFBVyxXQUE1QyxBQUF1RDtvQkFBdkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsTUFBd0IsT0FBeEIsQUFBOEIsT0FBTSxVQUFwQyxBQUE2QztvQkFBN0M7c0JBQUEsQUFBb0Q7QUFBcEQ7eUJBQW9ELEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFwRCxBQUFvRDtBQUFBO1VBRnRELEFBQ0EsQUFDRSxBQUVGLGdFQUFBLGNBQUEsU0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixLQUFJLEVBQUUsU0FBdkMsQUFBcUMsQUFBVztvQkFBaEQ7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFVBQVMsT0FBckIsTUFBMkIsT0FBM0IsQUFBaUMsU0FBUSxVQUF6QyxBQUFrRDtvQkFBbEQ7c0JBQUE7QUFBQTtTQUEyRixvREFBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFEM0YsQUFDQSxBQUEyRixBQUN6RjtBQUR5RjsyQkFDekYsQUFBQyxzQ0FBVyxTQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQztvQkFBaEM7c0JBbkNOLEFBRUUsQUEyQkUsQUFJQSxBQUVFLEFBSUo7QUFKSTs2QkFJSixBQUFDLDRDQUFVLE9BQU8sRUFBQyxXQUFuQixBQUFrQixBQUFXO29CQUE3QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFNBQVEsTUFBL0IsTUFBb0MsZUFBcEMsQUFBa0QsUUFBTyxPQUFPLEVBQUMsYUFBakUsQUFBZ0UsQUFBYyxVQUFTLFNBQVMsS0FBaEcsQUFBcUc7b0JBQXJHO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFGSixBQUNFLEFBSUEsa0NBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsU0FBUSxNQUEvQixNQUFvQyxlQUFwQyxBQUFrRDtvQkFBbEQ7c0JBQUEsQUFBeUQ7QUFBekQ7eUJBQXlELEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUF6RCxBQUF5RDtBQUFBO1VBN0NqRSxBQXVDRSxBQUtFLEFBQ0ksQUFHTiwyQ0FBQSxBQUFDLDBDQUFRLE9BQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQyxRQUFoQyxBQUF5QyxLQUFLLEVBQUUsU0FBaEUsQUFBOEQsQUFBVyxVQUFVLE9BQW5GLE1BQXlGLFdBQXpGLEFBQW1HO29CQUFuRztzQkFBQSxBQUNJO0FBREo7eUJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBakROLEFBZ0RFLEFBQ0ksQUFHSix1REFBQSxBQUFDLHVDQUFLLE9BQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQyxRQUFoQyxBQUF5QyxLQUFLLEVBQUUsU0FBN0QsQUFBMkQsQUFBVyxVQUFVLFVBQVUsS0FBMUYsQUFBK0YsU0FBUyxPQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBeEgsQUFBOEg7b0JBQTlIO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDLHdDQUFNLGFBQVAsQUFBbUIsaUJBQWdCLE9BQU8sS0FBQSxBQUFLLE1BQS9DLEFBQXFELE9BQU8sVUFBVSxrQkFBQSxBQUFDLE9BQVUsQUFBQztpQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUE1QixBQUFjLEFBQXFCLEFBQVE7QUFBN0g7b0JBQUE7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLHFDQUFBLEFBQUMsd0NBQU0sYUFBUCxBQUFtQixvQkFBbUIsT0FBTyxLQUFBLEFBQUssTUFBbEQsQUFBd0QsTUFBTSxVQUFVLGtCQUFBLEFBQUMsT0FBVSxBQUFDO2lCQUFBLEFBQUssU0FBUyxFQUFDLE1BQU0sTUFBQSxBQUFNLE9BQTNCLEFBQWMsQUFBb0IsQUFBUTtBQUE5SDtvQkFBQTtzQkFMRixBQUNBLEFBSUUsQUFFRjtBQUZFOzJCQUVGLEFBQUMsMENBQVEsT0FBVCxNQUFlLFNBQWYsQUFBdUIsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBUEEsQUFPQSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFNBQVEsTUFBL0IsTUFBb0MsZUFBcEMsQUFBa0QsUUFBTyxTQUFXLEtBQUEsQUFBSyxNQUF6RSxBQUErRTtvQkFBL0U7c0JBQUEsQUFBd0Y7QUFBeEY7eUJBQXdGLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUF4RixBQUF3RjtBQUFBO1VBNUQxRixBQW9ERSxBQVFBLEFBRUE7O29CQUFBO3NCQTlERixBQThERSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBaEVKLEFBQ0UsQUErREUsQUFJTDtBQUpLO0FBQUE7Ozs7OzZHLEFBdEl1Qjs7Ozs7bUJBQ3JCO0EsK0JBQWUsNEJBQWEsTUFBQSxBQUFNLE0sQUFBbkIsQUFBeUI7O3VCQUV4QixhQUFBLEFBQWEsUUFBYixBQUFxQixhLEFBQXJCLEFBQWtDOzttQkFBbEQ7QTs7dUJBQ2lCLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGMsQUFBckIsQUFBbUM7O21CQUFwRDtBLHFDQUNBO0EsMEJBQVUsTUFBQSxBQUFNLE1BQ2hCLEEsQUFEc0I7QSwyQkFDWCxRQUNYLEEsQUFEVyxBQUFRO0EsMkJBQ1IsUUFDWCxBLEFBRFcsQUFBUTtBLGdDQUNILFEsQUFBQSxBQUFRLEFBQ3hCO0EsdUJBQU8sUSxBQUFBLEFBQVEsQUFDZjtBLDRCQUFZLFEsQUFBQSxBQUFROzsyQkFDbkIsQUFFTDs0QkFGSyxBQUdMOzRCQUhLLEFBSUw7d0JBSkssQUFLTDtpQ0FMSyxBQU1MOzJCQUFTLGlDQUErQixRQU5uQyxBQU1tQyxBQUFRLEFBQ2hEOzZCQVBLLEFBUUw7NEIsQUFSSztBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSU4sQSxBQXhKMkI7O2tCQXdKM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1NFTSA3L0JUZWNoIFByb2plY3QvTWVkaVNlY3VyZS1tYXN0ZXIifQ==