(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-create/student-create.component */ "./src/app/student-create/student-create.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/student-detail/student-detail.component.ts");
/* harmony import */ var _student_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student.guard */ "./src/app/student.guard.ts");
/* harmony import */ var _tutor_create_tutor_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutor-create/tutor-create.component */ "./src/app/tutor-create/tutor-create.component.ts");
/* harmony import */ var _tutor_detail_tutor_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutor-detail/tutor-detail.component */ "./src/app/tutor-detail/tutor-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
    },
    {
        path: 'student', component: _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_2__["StudentCreateComponent"],
    },
    {
        path: 'student/:id', component: _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_4__["StudentDetailComponent"],
        resolve: { student: _student_guard__WEBPACK_IMPORTED_MODULE_5__["StudentGuard"] },
        children: [
            {
                path: 'tutor/new',
                component: _tutor_create_tutor_create_component__WEBPACK_IMPORTED_MODULE_6__["TutorCreateComponent"],
            },
            {
                path: 'tutor/:id',
                component: _tutor_detail_tutor_detail_component__WEBPACK_IMPORTED_MODULE_7__["TutorDetailComponent"],
            }
        ]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"py-5 text-center\">\n    <h2>Tutor Match</h2>\n    <p class=\"lead\">Below you can find and add the better Tutor(s) to your necessity. Enjoy!</p>\n  </div>\n  <div>\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a [routerLink]=\"['student']\">Student Register</a>\n        </li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Student Detail</li>\n      </ol>\n    </nav>\n  </div>\n  <router-outlet></router-outlet>\n  <br>\n  <hr>\n  <br>\n  <!-- START FOOTER -->\n  <footer class=\"my-5 pt-5 text-muted text-center text-small fixed-bottom\">\n    <p class=\"mb-1\">&copy; 2018 Code Challenge</p>\n  </footer>\n  <!-- FINISH FOOTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tutor_create_tutor_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutor-create/tutor-create.component */ "./src/app/tutor-create/tutor-create.component.ts");
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-create/student-create.component */ "./src/app/student-create/student-create.component.ts");
/* harmony import */ var _tutor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutor.service */ "./src/app/tutor.service.ts");
/* harmony import */ var _tutor_detail_tutor_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutor-detail/tutor-detail.component */ "./src/app/tutor-detail/tutor-detail.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/student-detail/student-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student.service */ "./src/app/student.service.ts");
/* harmony import */ var _student_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student.guard */ "./src/app/student.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _tutor_create_tutor_create_component__WEBPACK_IMPORTED_MODULE_6__["TutorCreateComponent"],
                _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateComponent"],
                _tutor_detail_tutor_detail_component__WEBPACK_IMPORTED_MODULE_9__["TutorDetailComponent"],
                _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_10__["StudentDetailComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _tutor_service__WEBPACK_IMPORTED_MODULE_8__["TutorService"],
                _student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"],
                _student_guard__WEBPACK_IMPORTED_MODULE_13__["StudentGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/models/student.ts":
/*!***********************************!*\
  !*** ./src/app/models/student.ts ***!
  \***********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/models/tutor.ts":
/*!*********************************!*\
  !*** ./src/app/models/tutor.ts ***!
  \*********************************/
/*! exports provided: Tutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tutor", function() { return Tutor; });
var Tutor = /** @class */ (function () {
    function Tutor() {
    }
    return Tutor;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/student-create/student-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student-create/student-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student-create/student-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/student-create/student-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>{{student | json}}</pre>\n<h4 class=\"mb-3\">Student Register</h4>\n<div>\n  <form class=\"needs-validation\" novalidate #studentForm=\"ngForm\" (ngSubmit)=\"add(studentForm)\">\n    <div class=\"mb-3\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"\" value=\"\" required [(ngModel)]=\"student.name\" name=\"name\">\n      <div class=\"invalid-feedback\">\n        Valid first name is required.\n      </div>\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"email\">Email</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">@</span>\n        </div>\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email\" required [(ngModel)]=\"student.email\" name=\"email\">\n        <div class=\"invalid-feedback\" style=\"width: 100%;\">\n          Your email is required.\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <button class=\"btn btn-outline-dark btn-lg\" type=\"submit\">CONFIRM</button>\n    </div>\n  </form>\n</div>\n<br>\n<hr>\n<br>\n<div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Created</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let student of students\">\n        <th scope=\"row\">{{student.id}}</th>\n        <td><a [routerLink]=\"[student.id]\">{{student.name}}</a></td>\n        <td>{{student.email}}</td>\n        <td>{{student.created_at | date: 'medium'}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/student-create/student-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-create/student-create.component.ts ***!
  \************************************************************/
/*! exports provided: StudentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function() { return StudentCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentCreateComponent = /** @class */ (function () {
    function StudentCreateComponent(studentService) {
        this.studentService = studentService;
        this.students = [];
    }
    StudentCreateComponent.prototype.add = function (student) {
        var _this = this;
        console.log(this.student);
        if (!student) {
            return;
        }
        this.studentService.addStudent(this.student)
            .subscribe(function (newStudent) {
            _this.student = newStudent;
            _this.students.push(_this.student);
        });
    };
    StudentCreateComponent.prototype.listAllStudents = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (result) {
            _this.students = result;
        });
    };
    StudentCreateComponent.prototype.ngOnInit = function () {
        this.student = new _models_student__WEBPACK_IMPORTED_MODULE_1__["Student"]();
        this.listAllStudents();
    };
    StudentCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-create',
            template: __webpack_require__(/*! ./student-create.component.html */ "./src/app/student-create/student-create.component.html"),
            styles: [__webpack_require__(/*! ./student-create.component.css */ "./src/app/student-create/student-create.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentCreateComponent);
    return StudentCreateComponent;
}());



/***/ }),

/***/ "./src/app/student-detail/student-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student-detail/student-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START STUDENT -->\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4 order-md-1 mb-4\">\n        <div class=\"blog-post\">\n          <h2 class=\"blog-post-title\">{{student.name}}</h2>\n          <p class=\"blog-post-meta\">{{student.created_at | date: 'medium'}}\n            <a href=\"#\">{{student.email}}</a>\n          </p>\n        </div>\n      </div>\n      <!-- START DIV STUDENT'S TUTORS -->\n      <div class=\"col-md-8 order-md-2\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Your Tutors</span>\n          <span class=\"badge badge-secondary badge-pill\">{{student.tutors.length}}</span>\n        </h4>\n        <ul class=\"list-group mb-3\" *ngFor=\"let tutor of student.tutors\">\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">\n                <a [routerLink]=\"['tutor', tutor.id]\">{{tutor.name}}</a>\n              </h6>\n              <small class=\"text-muted\">{{tutor.title}}</small>\n            </div>\n            <span class=\"text-muted\">Since: {{tutor.student_tutor.created_at | date: 'medium'}}</span>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeRelationship(tutor)\">REMOVE</button>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- FINISH TUTOR LIST -->\n<br>\n<hr>\n<br>\n<!-- START TUTOR LIST COMPONENT-->\n<div class=\"col-md-12\">\n  <div class=\"row\">\n    <!-- START TUTOR LIST -->\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <div div class=\"card-deck\" *ngFor=\"let tutor of tutors\">\n          <div class=\"col-sm-3 text-center\" >\n            <div class=\"card\" style=\"width: 17rem;\">\n              <img class=\"card-img-top\" src=\"{{tutor.picture}}\" class=\"img-fluid img-thumbnail\" alt=\"Responsive image\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">\n                  <a [routerLink]=\"['tutor', tutor.id]\">{{tutor.name}}</a>\n                </h5>\n                <p class=\"card-text\">{{tutor.title}}</p>\n                <p class=\"card-text\">\n                  <small class=\"text-muted\">{{tutor.contact}}</small>\n                </p>\n                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"addRelationship(tutor)\">JOIN</button>\n                <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteTutor(tutor)\">DELETE</button>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FINISH TUTOR LIST -->\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <pre>{{tutor | json}}</pre>\n\n          <h4 class=\"mb-3\">Tutor Register</h4>\n          <form class=\"needs-validation\" novalidate #tutorForm=\"ngForm\" (ngSubmit)=\"addTutor(tutorForm)\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"\" value=\"\" [(ngModel)]=\"tutor.name\" name=\"name\">\n                <div class=\"invalid-feedback\">\n                  Valid first name is required.\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"title\">Specialty</label>\n                <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"\" value=\"\" [(ngModel)]=\"tutor.title\" required name=\"title\">\n                <div class=\"invalid-feedback\">\n                  Valid last name is required.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"linkedin\">Contact</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"contact\" placeholder=\"Linkedin\" [(ngModel)]=\"tutor.contact\" required required\n                  name=\"contact\">\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                  Your Linkedin is required.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"image\">Your Image</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">:)</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"picture\" placeholder=\"image\" [(ngModel)]=\"tutor.picture\" required name=\"picture\">\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                  Your Image is required.\n                </div>\n              </div>\n            </div>\n\n\n            <button class=\"btn btn-dark btn-lg btn-block\" type=\"submit\">SAVE</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- START TUTOR LIST COMPONENT-->\n"

/***/ }),

/***/ "./src/app/student-detail/student-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.ts ***!
  \************************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_tutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/tutor */ "./src/app/models/tutor.ts");
/* harmony import */ var _tutor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tutor.service */ "./src/app/tutor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(tutorService, studentService, route, router) {
        this.tutorService = tutorService;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.student = new _models_student__WEBPACK_IMPORTED_MODULE_3__["Student"]();
    }
    StudentDetailComponent.prototype.getStudent = function () {
        var _this = this;
        this.studentService.getStudent(this.student.id)
            .subscribe(function (result) {
            _this.student = result;
        });
    };
    StudentDetailComponent.prototype.getTutors = function () {
        var _this = this;
        this.tutorService.getTutors()
            .subscribe(function (tutors) { return _this.tutors = tutors; });
    };
    StudentDetailComponent.prototype.deleteTutor = function (tutor) {
        var _this = this;
        this.tutorService.deleteTutor(tutor)
            .subscribe(function () {
            _this.getStudent();
            _this.getTutors();
        });
    };
    StudentDetailComponent.prototype.addRelationship = function (tutor) {
        var _this = this;
        this.studentService.addTutorToStudent(this.student.id, tutor.id).subscribe(function (result) {
            _this.student = result;
            _this.getStudent();
        });
    };
    StudentDetailComponent.prototype.addTutor = function (tutor) {
        var _this = this;
        console.log(this.tutor);
        if (!tutor) {
            return;
        }
        this.tutorService.addTutor(this.tutor)
            .subscribe(function (newTutor) {
            _this.tutor = newTutor;
            console.log(_this.tutor);
            _this.getTutors();
            _this.tutor = new _models_tutor__WEBPACK_IMPORTED_MODULE_4__["Tutor"]();
        });
    };
    StudentDetailComponent.prototype.removeRelationship = function (tutor) {
        var _this = this;
        this.studentService.removeTutorToStudent(this.student.id, tutor.id).subscribe(function (result) {
            _this.student = result;
            _this.getStudent();
        });
        console.log(tutor, this.student.id);
    };
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTutors();
        this.tutor = new _models_tutor__WEBPACK_IMPORTED_MODULE_4__["Tutor"]();
        this.inscricao = this.route.data.subscribe(function (info) {
            console.log('Recebendo o obj Student do resolver');
            _this.student = info.student;
        });
    };
    StudentDetailComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    StudentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-detail',
            template: __webpack_require__(/*! ./student-detail.component.html */ "./src/app/student-detail/student-detail.component.html"),
            styles: [__webpack_require__(/*! ./student-detail.component.css */ "./src/app/student-detail/student-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_tutor_service__WEBPACK_IMPORTED_MODULE_5__["TutorService"],
            _student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/app/student.guard.ts":
/*!**********************************!*\
  !*** ./src/app/student.guard.ts ***!
  \**********************************/
/*! exports provided: StudentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGuard", function() { return StudentGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.service */ "./src/app/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentGuard = /** @class */ (function () {
    function StudentGuard(studentService) {
        this.studentService = studentService;
    }
    StudentGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    StudentGuard.prototype.resolve = function (route, state) {
        console.log('AlunoDetalheResolver');
        var id = route.params['id'];
        return this.studentService.getStudent(id);
    };
    StudentGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], StudentGuard);
    return StudentGuard;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StudentService = /** @class */ (function () {
    function StudentService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl; // URL to web api
    }
    /** GET Tutor from the server */
    StudentService.prototype.getStudents = function () {
        var _this = this;
        return this.http.get(this.url + "/student")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tutors) { return _this.log('fetched tutors'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTutors', [])));
    };
    /** GET tutor by id. Return `undefined` when id not found */
    StudentService.prototype.getStudentNo404 = function (id) {
        var _this = this;
        var url = this.url + "/student/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tutors) { return tutors[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " tutor id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getTutor id=" + id)));
    };
    /** GET tutor by id. Will 404 if id not found */
    StudentService.prototype.getStudent = function (id) {
        var _this = this;
        var url = this.url + "/student/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched tutor id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getStudent id=" + id)));
    };
    //////// Save methods //////////
    /** POST: add a new tutor to the server */
    StudentService.prototype.addStudent = function (tutor) {
        var _this = this;
        console.log(tutor);
        return this.http.post(this.url + "/student", tutor, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (student) { return _this.log("added student w/ id=" + student.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addStudent')));
    };
    StudentService.prototype.addTutorToStudent = function (studentId, tutorId) {
        var _this = this;
        return this.http.post(this.url + "/student/tutor?studentId=" + studentId + "&tutorId=" + tutorId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("added relantinship"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTutorToStudent')));
    };
    StudentService.prototype.removeTutorToStudent = function (studentId, tutorId) {
        var _this = this;
        return this.http.put(this.url + "/student/tutor?studentId=" + studentId + "&tutorId=" + tutorId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("added relantinship"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTutorToStudent')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    StudentService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a TutorService message with the MessageService */
    StudentService.prototype.log = function (message) {
        this.messageService.add("StudentService: " + message);
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/tutor-create/tutor-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tutor-create/tutor-create.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tutor-create/tutor-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tutor-create/tutor-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>{{tutor | json}}</pre>\n\n<h4 class=\"mb-3\">Tutor Register</h4>\n<form class=\"needs-validation\" novalidate #tutorForm=\"ngForm\" (ngSubmit)=\"add(tutorForm)\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"\" value=\"\"  [(ngModel)]=\"tutor.name\" name=\"name\">\n      <div class=\"invalid-feedback\">\n        Valid first name is required.\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"title\">Specialty</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"\" value=\"\" [(ngModel)]=\"tutor.title\" required name=\"title\">\n      <div class=\"invalid-feedback\">\n        Valid last name is required.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <label for=\"linkedin\">Contact</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">@</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" id=\"contact\" placeholder=\"Linkedin\" [(ngModel)]=\"tutor.contact\" required required name=\"contact\">\n      <div class=\"invalid-feedback\" style=\"width: 100%;\">\n        Your Linkedin is required.\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"mb-3\">\n      <label for=\"image\">Your Image</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">:)</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"picture\" placeholder=\"image\" [(ngModel)]=\"tutor.picture\" required name=\"picture\"> \n        <div class=\"invalid-feedback\" style=\"width: 100%;\">\n          Your Image is required.\n        </div>\n      </div>\n    </div>\n\n\n  <button class=\"btn btn-dark btn-lg btn-block\" type=\"submit\">SAVE</button>\n</form>"

/***/ }),

/***/ "./src/app/tutor-create/tutor-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tutor-create/tutor-create.component.ts ***!
  \********************************************************/
/*! exports provided: TutorCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorCreateComponent", function() { return TutorCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tutor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tutor.service */ "./src/app/tutor.service.ts");
/* harmony import */ var _models_tutor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tutor */ "./src/app/models/tutor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorCreateComponent = /** @class */ (function () {
    function TutorCreateComponent(tutorService) {
        this.tutorService = tutorService;
        this.tutors = [];
    }
    TutorCreateComponent.prototype.add = function (tutor) {
        var _this = this;
        console.log(this.tutor);
        if (!tutor) {
            return;
        }
        this.tutorService.addTutor(this.tutor)
            .subscribe(function (newTutor) {
            _this.tutor = newTutor;
            console.log(_this.tutor);
        });
        this.tutors.push();
    };
    TutorCreateComponent.prototype.ngOnInit = function () {
        this.tutor = new _models_tutor__WEBPACK_IMPORTED_MODULE_2__["Tutor"]();
    };
    TutorCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutor-create',
            template: __webpack_require__(/*! ./tutor-create.component.html */ "./src/app/tutor-create/tutor-create.component.html"),
            styles: [__webpack_require__(/*! ./tutor-create.component.css */ "./src/app/tutor-create/tutor-create.component.css")]
        }),
        __metadata("design:paramtypes", [_tutor_service__WEBPACK_IMPORTED_MODULE_1__["TutorService"]])
    ], TutorCreateComponent);
    return TutorCreateComponent;
}());



/***/ }),

/***/ "./src/app/tutor-detail/tutor-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tutor-detail/tutor-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tutor-detail/tutor-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tutor-detail/tutor-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tutor-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/tutor-detail/tutor-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tutor-detail/tutor-detail.component.ts ***!
  \********************************************************/
/*! exports provided: TutorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorDetailComponent", function() { return TutorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorDetailComponent = /** @class */ (function () {
    function TutorDetailComponent() {
    }
    TutorDetailComponent.prototype.ngOnInit = function () {
    };
    TutorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutor-detail',
            template: __webpack_require__(/*! ./tutor-detail.component.html */ "./src/app/tutor-detail/tutor-detail.component.html"),
            styles: [__webpack_require__(/*! ./tutor-detail.component.css */ "./src/app/tutor-detail/tutor-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorDetailComponent);
    return TutorDetailComponent;
}());



/***/ }),

/***/ "./src/app/tutor.service.ts":
/*!**********************************!*\
  !*** ./src/app/tutor.service.ts ***!
  \**********************************/
/*! exports provided: TutorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorService", function() { return TutorService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TutorService = /** @class */ (function () {
    function TutorService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl; // URL to web api
    }
    /** GET Tutor from the server */
    TutorService.prototype.getTutors = function () {
        var _this = this;
        return this.http.get(this.url + "/tutor")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tutors) { return _this.log('fetched tutors'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTutors', [])));
    };
    /** GET tutor by id. Return `undefined` when id not found */
    TutorService.prototype.getTutorNo404 = function (id) {
        var _this = this;
        var url = this.url + "/tutor/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tutors) { return tutors[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " tutor id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getTutor id=" + id)));
    };
    /** GET tutor by id. Will 404 if id not found */
    TutorService.prototype.getTutor = function (id) {
        var _this = this;
        var url = this.url + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched tutor id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getTutor id=" + id)));
    };
    /* GET Tutor whose name contains search term */
    TutorService.prototype.searchTutor = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty tutor array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get(this.url + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found Tutor matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchTutor', [])));
    };
    //////// Save methods //////////
    /** POST: add a new tutor to the server */
    TutorService.prototype.addTutor = function (tutor) {
        var _this = this;
        console.log(tutor);
        return this.http.post(this.url + "/tutor", tutor, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tutor2) { return _this.log("added tutor w/ id=" + tutor2.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTutor')));
    };
    /** DELETE: delete the tutor from the server */
    TutorService.prototype.deleteTutor = function (tutor) {
        var _this = this;
        var id = typeof tutor === 'number' ? tutor : tutor.id;
        var url = this.url + "/tutor/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted tutor id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTutor')));
    };
    /** PUT: update the tutor on the server */
    TutorService.prototype.updateTutor = function (tutor) {
        var _this = this;
        return this.http.put(this.url, tutor, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated tutor id=" + tutor.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTutor')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TutorService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a TutorService message with the MessageService */
    TutorService.prototype.log = function (message) {
        this.messageService.add("TutorService: " + message);
    };
    TutorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], TutorService);
    return TutorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vitor/Desenvolvimento/TutorMatch/tutormatch_front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map