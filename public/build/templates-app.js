angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'parts/parts.tpl.html', 'profile/profile.tpl.html', 'profiles/profiles.tpl.html', 'register/register.tpl.html', 'rooms/rooms.tpl.html', 'seats/seats.tpl.html', 'states/states.tpl.html', 'tables/tables.tpl.html', 'users/users.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div layout=\"row\" layout-margin layout-fill layout-padding>\n" +
    "    <div layout=\"column\" layout-align=\"start center\" flex>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-warn seat\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"green\">\n" +
    "                        <span><img src='/assets/svg/ic_check_18px.svg'></span>\n" +
    "                        <md-tooltip>\n" +
    "                            Your seat\n" +
    "                        </md-tooltip>\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"yellow\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"grey\" ></md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 1</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"yellow\" aria-label=\"check\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary md-warn seat\" >\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"grey\" ></md-button>\n" +
    "                    <md-button ng-click=\"showReservation($event)\" class=\"md-fab md-primary seat\" md-theme=\"yellow\" aria-label=\"check\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"pull-left\" style=\"opacity: 0\">\n" +
    "                <md-button class=\"md-fab seat\" ></md-button>\n" +
    "                <md-button class=\"md-fab seat\" md-theme=\"grey\"></md-button>\n" +
    "            </div>\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <!--<md-button class=\"md-fab md-primary seat\" md-theme=\"purple\" aria-label=\"Profile\"></md-button>-->\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 2</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary md-raised seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"check\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 3</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary md-raised seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"check\">\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 3</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div layout=\"column\" layout-align=\"start end\">\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary md-raised seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-click=\"dialogBasic($event)\" class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"yellow\" aria-label=\"check\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" >\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 4</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary md-raised seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button ng-click=\"dialogBasic($event)\" class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"yellow\" aria-label=\"check\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" >\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 4</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"tableWrapper pull-left\">\n" +
    "                <div class=\"seats seatsTop\">\n" +
    "                    <md-button class=\"md-fab md-primary md-raised seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button ng-click=\"dialogBasic($event)\" class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" ng-click=\"showReservation($event)\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"yellow\" aria-label=\"check\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button  class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" >\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "                <md-card md-whiteframe layout layout-align=\"center center\" class=\"tableCenter md-primary clearfix\">Table 4</md-card>\n" +
    "                <div class=\"seats seatsBottom clearfix\">\n" +
    "                    <md-button class=\"md-fab md-primary seat\" aria-label=\"Profile\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary\" md-theme=\"grey\" ng-click=\"showReservation($event)\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary md-warn seat\" md-theme=\"grey\" aria-label=\"Profile\">\n" +
    "                        <span><img src='/assets/svg/design/ic_person_18px.svg'></span>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                    <md-button class=\"md-fab md-primary seat\" md-theme=\"grey\" aria-label=\"Profile\"></md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<style>\n" +
    "    body\n" +
    "    {\n" +
    "        background-color: black;\n" +
    "    }\n" +
    "    input{\n" +
    "        color:black;\n" +
    "    }\n" +
    "</style>\n" +
    "<h3>Login </h3>\n" +
    "<label>Email:</label>\n" +
    "<form action=\"/auth/\" method=\"post\" ng-submit=\"Login(user)\">\n" +
    "    <!-- this input field synchronizes directly to the name attribute in Firebase! -->\n" +
    "    <input type=\"email\" name=\"email\" ng-model=\"user.email\" />\n" +
    "    <label>Password:</label>\n" +
    "    <input type=\"password\" name=\"password\" ng-model=\"user.password\" />\n" +
    "    <input class=\"btn btn-alert\" type=\"submit\">Sing in</input>\n" +
    "</form>");
}]);

angular.module("parts/parts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/parts.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Zadaj text pre filtráciu\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{parts.length}} / {{(parts | filter: SearchText).length}}</h2>\n" +
    "</div>\n" +
    "<br/>\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>List častí miestnosti v Databáze</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <md-content>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"part in parts | filter: SearchText | orderBy:'part.order'\">\n" +
    "                    <md-item-content >\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Poradie časti v miestnosti\" ng-model=\"part.order\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Názov časti v miestnosti\" ng-model=\"part.name\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Pozícia časti v miestnosti slovom\" ng-model=\"part.positioning\" disabled></md-text-float>\n" +
    "                            <span> Miestnosť: </span>\n" +
    "                            <select ng-init=\"changePart.room = rooms[part.room.order]\" ng-model=\"changePart.room\" ng-options=\"room.name for room in rooms\" required></select>\n" +
    "                            <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-click=\"SavePart(part, changePart)\"> Uložiť </md-button>\n" +
    "                                <md-button class=\"md-raised\" ng-click=\"CleanPart(part)\"> Vyčistiť </md-button>\n" +
    "                                <md-button class=\"md-raised md-warn\" ng-click=\"DeletePart(part)\"> Vymazať </md-button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </md-item-content>\n" +
    "                    <!--<md-divider ng-if=\"!$last\"></md-divider>-->\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Uložiť novú časť miestnosti do Databázy</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "            <md-text-float label=\"Poradie časti v miestnosti\" ng-model=\"newPart.order\" disabled></md-text-float>\n" +
    "            <md-text-float label=\"Názov časti v miestnosti\" ng-model=\"newPart.name\" disabled></md-text-float>\n" +
    "            <md-text-float label=\"Pozícia časti v miestnosti slovom\" ng-model=\"newPart.positioning\" disabled></md-text-float>\n" +
    "            <span> Miestnosť: </span>\n" +
    "            <select ng-model=\"newPart.room\" ng-options=\"room.name for room in rooms\" required></select>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"AddPart(newPart)\">Vytvoriť</md-button>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "</md-content>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<h3>Edit {{ profile.$id }}</h3>\n" +
    "<label>Name:</label>\n" +
    "<!-- this input field synchronizes directly to the name attribute in Firebase! -->\n" +
    "<input type=\"text\" ng-model=\"profile.name\" />\n" +
    "<label>Email:</label>\n" +
    "<input type=\"text\" ng-model=\"profile.email\" />\n" +
    "");
}]);

angular.module("profiles/profiles.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profiles/profiles.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Filtruj podľa textu...\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{profiles.length}} / {{(profiles | filter: SearchText).length}}</h2>\n" +
    "</div>\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Zoznam profilov osôb uložených v Databáze</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <md-content>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"profile in profiles | filter: SearchText | orderBy:'last_name'\">\n" +
    "                    <md-item-content>\n" +
    "                        <!--<div layout=\"column\">-->\n" +
    "                            <!--<div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">-->\n" +
    "                            <!--&lt;!&ndash;<span> Miesto: </span>&ndash;&gt;-->\n" +
    "                            <!--&lt;!&ndash;<select ng-init=\"changeSeat.state = states[seat.state.num]\" ng-model=\"changeSeat.state\" ng-options=\"state.name for state in states\" required></select>&ndash;&gt;-->\n" +
    "                            <!--&lt;!&ndash;<span> Stôl číslo: </span>&ndash;&gt;-->\n" +
    "                            <!--&lt;!&ndash;<select ng-init=\"changeSeat.table = tables[seat.table.order]\" ng-model=\"changeSeat.table\" ng-options=\"table.order for table in tables\" required></select>&ndash;&gt;-->\n" +
    "                        <!--</div>-->\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Krstné meno\" ng-model=\"profile.first_name\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Priezvisko\" ng-model=\"profile.last_name\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"eMail\" ng-model=\"profile.email\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Mobil\" ng-model=\"profile.mobil\" disabled></md-text-float>\n" +
    "                            <span layout=\"center\"> Viac ako 18 rokov: </span>\n" +
    "                            <md-checkbox aria-label=\"{{profile.under_18}}\" ng-model=\"profile.under_18\"></md-checkbox>\n" +
    "                            <div layout=\"row\" layout-align=\"start center\">\n" +
    "                                <md-button class=\"btn btn-info\" ng-click=\"SaveProfile(profile, changeProfile)\">Uložiť</md-button>\n" +
    "                                <md-button class=\"btn btn-primary\" ng-click=\"CleanProfile(profile)\">Vyčistiť</md-button>\n" +
    "                                <md-button class=\"btn btn-danger\" ng-click=\"DeleteProfile(profile)\">Vymazať</md-button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Uložiť nový profile do Databázy</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "            <md-text-float label=\"Krstné meno\" ng-model=\"addProfile.first_name\" disabled></md-text-float>\n" +
    "            <md-text-float label=\"Priezvisko\" ng-model=\"addProfile.last_name\" disabled></md-text-float>\n" +
    "            <md-text-float label=\"eMail\" ng-model=\"addProfile.email\" disabled></md-text-float>\n" +
    "            <md-text-float label=\"Mobil\" ng-model=\"addProfile.mobil\" disabled></md-text-float>\n" +
    "            <span layout=\"center\"> Viac ako 18 rokov: </span>\n" +
    "            <md-checkbox aria-label=\"{{addProfile.under_18}}\" ng-model=\"addProfile.under_18\"></md-checkbox>\n" +
    "            <div layout=\"row\" layout-align=\"start center\">\n" +
    "                <md-button class=\"btn btn-info\" ng-click=\"AddSeat(addProfile)\">Vytvoriť</md-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "</md-content>");
}]);

angular.module("register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/register.tpl.html",
    "<style>\n" +
    "    body\n" +
    "    {\n" +
    "        background-color: black;\n" +
    "    }\n" +
    "    input{\n" +
    "        color:black;\n" +
    "    }\n" +
    "</style>\n" +
    "<h3>Registration </h3>\n" +
    "<form action=\"/auth/registration\" method=\"post\" >\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <td><label>Meno:</label></td>\n" +
    "            <td><input type=\"text\" name=\"meno\" ng-model=\"user.userName\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>Priezvisko:</label></td>\n" +
    "            <td><input type=\"text\" name=\"priezvisko\" ng-model=\"user.lastName\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>E-mail:</label></td>\n" +
    "            <td><input type=\"email\" name=\"email\" ng-model=\"user.email\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>Heslo:</label></td>\n" +
    "            <td><input type=\"password\" name=\"heslo\" ng-model=\"user.password1\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>Potvrdenie hesla:</label></td>\n" +
    "            <td><input type=\"password\" name=\"heslo2\" ng-model=\"user.password2\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>Dátum narodenia</label></td>\n" +
    "            <td><input type=\"date\" name=\"datum\" ng-model=\"user.date\" required style=\"width: 200px;\"/></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><label>Pohlavie</label></td>\n" +
    "            <td>\n" +
    "                <label>Muž</label><input type=\"radio\" name=\"pohlavie\" value=\"male\"/>\n" +
    "                <label>Žena</label><input type=\"radio\" name=\"pohlavie\" value=\"female\"/>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td><input type=\"submit\" value=\"Registrovat sa\"></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</form>");
}]);

angular.module("rooms/rooms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rooms/rooms.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Zadaj text pre filtráciu\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{rooms.length}} / {{(rooms | filter: SearchText).length}}</h2>\n" +
    "</div>\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Zoznam miestnosti v Databáze</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <md-content>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"room in rooms | filter: SearchText | orderBy:'room.order'\">\n" +
    "                    <md-item-content>\n" +
    "                        <div class=\"md-tile-content md-padding\" layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "                            <md-text-float label=\"Poradie miestnosti\" ng-model=\"room.order\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Názov miestnosti\" ng-model=\"room.name\"></md-text-float>\n" +
    "                            <md-text-float label=\"Pozícia miestnosti\" ng-model=\"room.positioning\"></md-text-float>\n" +
    "                            <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-click=\"SaveRoom(room, changeRoom)\">Uložiť</md-button>\n" +
    "                                <md-button class=\"md-raised\" ng-click=\"CleanRoom(room)\">Vyčistiť</md-button>\n" +
    "                                <md-button class=\"md-raised md-warn\" ng-click=\"DeleteRoom(room)\">Vymazať</md-button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Uložiť novú miestnosť do Databázy</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "            <md-text-float label=\"Názov miestnosti\" ng-model=\"newRoom.name\"></md-text-float>\n" +
    "            <md-text-float label=\"Pozícia miestnosti\" ng-model=\"newRoom.positioning\"></md-text-float>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"AddRoom(newRoom)\" style=\"max-height: 40px\">Vytvoriť</md-button>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("seats/seats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("seats/seats.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Zadaj text pre filtráciu\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{seats.length}} / {{(seats | filter: 'Reservované').length}} / {{(seats | filter: 'Zakúpené').length}}</h2>\n" +
    "</div>\n" +
    "<md-card layout-padding>\n" +
    "    <md-toolbar class=\"md-theme-light\">\n" +
    "        <h1 class=\"md-toolbar-tools\">\n" +
    "            <span>Zoznam miest uložených v Databáze</span>\n" +
    "        </h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <md-list>\n" +
    "            <md-item ng-repeat=\"seat in seats | filter: SearchText | orderBy:'seat.order'\">\n" +
    "                <md-item-content>\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Poradové číslo\" ng-model=\"seat.order\" disabled></md-text-float>\n" +
    "                            <h4> Stav miesta: </h4>\n" +
    "                            <select ng-init=\"changeSeat.state = states[seat.state.num]._id\" ng-model=\"changeSeat.state\" ng-options=\"state._id as state.name for state in states\" required></select>\n" +
    "                            <span> Miestnosť: </span>\n" +
    "                            <select ng-init=\"changeSeat.room = rooms[seat.room.order]._id\" ng-model=\"changeSeat.room\" ng-options=\"room._id as room.name for room in rooms\" required></select>\n" +
    "                            <span>Časť v miestnosti</span>\n" +
    "                            <select ng-init=\"changeSeat.part = parts[seat.part.order]._id\" ng-model=\"changeSeat.part\" ng-options=\"part._id as part.name for part in parts\" required></select>\n" +
    "                            <span> Stôl číslo: </span>\n" +
    "                            <select ng-init=\"changeSeat.table = tables[seat.table.order]._id\" ng-model=\"changeSeat.table\" ng-options=\"table._id as table.order for table in tables\" required></select>\n" +
    "                        </div>\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Krstné meno\" ng-model=\"seat.profile.first_name\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Priezvisko\" ng-model=\"seat.profile.last_name\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"eMail\" ng-model=\"seat.profile.email\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Mobil\" ng-model=\"seat.profile.mobil\" disabled></md-text-float>\n" +
    "                            <div layout=\"row\" layout-align=\"start center\">\n" +
    "                                <span layout=\"center\"> Viac ako 18 rokov: </span>\n" +
    "                                <md-checkbox aria-label=\"{{seat.profile.under_18}}\" ng-model=\"seat.profile.under_18\"></md-checkbox>\n" +
    "                            </div>\n" +
    "                            <div layout=\"row\" layout-align=\"start center\">\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-click=\"SaveSeat(seat, changeSeat)\">Uložiť</md-button>\n" +
    "                                <md-button class=\"md-raised\" ng-click=\"CleanSeat(seat)\">Vyčistiť</md-button>\n" +
    "                                <md-button class=\"md-raised md-warn\" ng-click=\"DeleteSeat(seat)\">Vymazať</md-button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-item-content>\n" +
    "            </md-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "\n" +
    "<md-card layout-padding>\n" +
    "    <md-toolbar class=\"md-theme-light\">\n" +
    "        <h1 class=\"md-toolbar-tools\">\n" +
    "            <span>Pridať miesto do Databázy</span>\n" +
    "        </h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <div layout=\"column\">\n" +
    "            <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                <md-text-float label=\"Poradové číslo\" ng-model=\"addSeat.order\" disabled></md-text-float>\n" +
    "                <md-text-float label=\"Krstné meno\" ng-model=\"addSeat.profile.first_name\" disabled></md-text-float>\n" +
    "                <md-text-float label=\"Priezvisko\" ng-model=\"addSeat.profile.last_name\" disabled></md-text-float>\n" +
    "                <md-text-float label=\"eMail\" ng-model=\"addSeat.profile.email\" disabled></md-text-float>\n" +
    "                <md-text-float label=\"Mobil\" ng-model=\"addSeat.profile.mobil\" disabled></md-text-float>\n" +
    "                <div layout=\"row\" layout-align=\"start center\">\n" +
    "                    <span layout=\"center\"> Viac ako 18 rokov: </span>\n" +
    "                    <md-checkbox aria-label=\"{{addSeat.profile.under_18}}\" ng-model=\"addSeat.profile.under_18\" selected></md-checkbox>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                <span> Miestnosť: </span>\n" +
    "                <select ng-model=\"addSeat.room\" ng-options=\"room._id as room.name for room in rooms\" required></select>\n" +
    "                <span> Časť miestnosti: </span>\n" +
    "                <select ng-model=\"addSeat.part\" ng-options=\"part._id as part.name for part in parts\" required></select>\n" +
    "                <span> Stôl číslo: </span>\n" +
    "                <select ng-model=\"addSeat.table\" ng-options=\"table._id as table.order for table in tables\" required></select>\n" +
    "                <h4> Stav miesta: </h4>\n" +
    "                <select ng-model=\"addSeat.state\" ng-options=\"state._id as state.name for state in states\" required></select>\n" +
    "                <div layout=\"row\" layout-align=\"start center\">\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-click=\"AddSeat(addSeat)\">Vytvoriť</md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-content>\n" +
    "</md-card>\n" +
    "\n" +
    "");
}]);

angular.module("states/states.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("states/states.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Zadaj text pre filtráciu\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{states.length}} / {{(states | filter: SearchText).length}}</h2>\n" +
    "</div>\n" +
    "<md-card layout-padding>\n" +
    "    <md-toolbar class=\"md-theme-light\">\n" +
    "        <h1 class=\"md-toolbar-tools\">\n" +
    "            <span>Zoznam stavov miest uložených v Databáze</span>\n" +
    "        </h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <md-list>\n" +
    "            <md-item ng-repeat=\"state in states | filter: SearchText | orderBy:'num'\">\n" +
    "                <md-item-content>\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Poradové číslo stavu\" ng-model=\"state.num\" disabled></md-text-float>\n" +
    "                            <md-text-float label=\"Pomenovanie stavu\" ng-model=\"state.name\" disabled></md-text-float>\n" +
    "                            <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-click=\"SaveState(state)\">Uložiť</md-button>\n" +
    "                                <md-button class=\"md-raised \" ng-click=\"CleanState(state)\">Vyčistiť</md-button>\n" +
    "                                <md-button class=\"md-raised md-warn\" ng-click=\"DeleteState(state)\">Vymazať</md-button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-item-content>\n" +
    "            </md-item>\n" +
    "        </md-list>\n" +
    "    </md-content>\n" +
    "</md-card>\n" +
    "\n" +
    "<md-card layout-padding>\n" +
    "    <md-toolbar class=\"md-theme-light\">\n" +
    "        <h1 class=\"md-toolbar-tools\">\n" +
    "            <span>Pridať nový stav miesta do Databázy</span>\n" +
    "        </h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <div layout=\"column\">\n" +
    "            <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                <md-text-float label=\"Zadaj pomenovanie stavu\" ng-model=\"addState.num\" disabled></md-text-float>\n" +
    "                <md-button class=\"md-raised md-primary\" ng-click=\"AddState(addState)\">Vytvoriť</md-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-content>\n" +
    "</md-card>\n" +
    "");
}]);

angular.module("tables/tables.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tables/tables.tpl.html",
    "<div layout=\"row\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "    <md-text-float label=\"Zadaj text pre filtráciu\" ng-model=\"SearchText\"></md-text-float>\n" +
    "    <h2>{{tables.length}} / {{(tables | filter: '548afd22436b8c341c8d1efb').length}} / {{(tables| filter: '548afd22436b8c341c8d1efc').length}}</h2>\n" +
    "</div>\n" +
    "\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Zoznam stolov uložených v Databáze</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <md-content>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"table in tables | filter: SearchText | orderBy:'order'\">\n" +
    "                    <md-item-content >\n" +
    "                        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "                            <md-text-float label=\"Číslo poradia stola\" ng-model=\"table.order\" disabled></md-text-float>\n" +
    "                            <span> Miestnosť: </span>\n" +
    "                            <select ng-init=\"changeTable.room = rooms[table.room.order]._id\" ng-model=\"changeTable.room\" ng-options=\"room._id as room.name for room in rooms\" required></select>\n" +
    "                            <span>Časť v miestnosti</span>\n" +
    "                            <select ng-init=\"changeTable.part = parts[table.part.order]._id\" ng-model=\"changeTable.part\" ng-options=\"part._id as part.name for part in parts\" required></select>\n" +
    "                            <md-button class=\"md-raised md-primary\" ng-click=\"SaveTable(table, changeTable)\"> Uložiť </md-button>\n" +
    "                            <md-button class=\"md-raised\" ng-click=\"CleanTable(table)\"> Vyčistiť </md-button>\n" +
    "                            <md-button class=\"md-raised md-warn\" ng-click=\"DeleteTable(table)\"> Vymazať </md-button>\n" +
    "                        </div>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "<md-content>\n" +
    "    <md-card layout-padding>\n" +
    "        <md-toolbar class=\"md-theme-light\">\n" +
    "            <h1 class=\"md-toolbar-tools\">\n" +
    "                <span>Uložiť nový stôl do Databázy</span>\n" +
    "            </h1>\n" +
    "        </md-toolbar>\n" +
    "        <div class=\"md-tile-content\" layout=\"row\" class=\"md-padding\">\n" +
    "            <md-text-float label=\"Číslo poradia stola\" ng-model=\"addTable.order\" disabled></md-text-float>\n" +
    "            <span> Miestnosť: </span>\n" +
    "            <select ng-model=\"addTable.room\" ng-options=\"room._id as room.name for room in rooms\" required></select>\n" +
    "            <span> Časť miestnosti: </span>\n" +
    "            <select ng-model=\"addTable.part\" ng-options=\"part._id as part.name for part in parts\" required></select>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"AddTable(addTable)\">Vytvoriť</md-button>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users.tpl.html",
    "<h1>Users</h1>\n" +
    "\n" +
    "<h3>{{users.length}} / {{(users | filter: SearchText).length}}</h3>\n" +
    "<br/>\n" +
    "\n" +
    "<div>\n" +
    "    <h4>Filtruj: </h4>\n" +
    "    <h5><input type=\"text\" ng-model=\"SearchText\" placeholder=\"Zadaj text pre filtráciu\"/></h5>\n" +
    "</div>\n" +
    "<br/>\n" +
    "\n" +
    "<div ng-repeat=\"user in users | filter: SearchText | orderBy:'profile.email'\">\n" +
    "    <!--<md-text-float label=\"{{profile.first_name}}\" ng-model=\"profile.first_name\" disabled></md-text-float>-->\n" +
    "    <!--<select ng-init=\"changeState = states[state.num]\" ng-model=\"changeState\" ng-options=\"state.name for state in states\" required></select>-->\n" +
    "    <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "        <md-button class=\"md-raised md-primary\" ng-click=\"SaveUser(user)\">Uložiť</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"CleanUser(user)\">Vyčistiť</md-button>\n" +
    "        <md-button class=\"md-raised md-warn\" ng-click=\"DeleteUser(user)\">Vymazať</md-button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "    <input type=\"text\" ng-model=\"addUser.profile.first_name\" placeholder=\"Zadaj názov stavu\"/>\n" +
    "    <div layout=\"row\" layout-sm=\"column\" layout-margin layout-align=\"left center\">\n" +
    "        <md-button class=\"md-raised md-primary\" ng-click=\"AddUser(addUser)\">Vytvoriť</md-button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
