(function() {

    var fork = "Yemasthui";

    //SHIP NAMES BITCh
    var shipNames = [];
    var shipVotes = [];

    function extend() {

        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }


        var bot = window.bot;


        bot.retrieveSettings();
        var subChat = function(chat, obj) {
            if (typeof chat === "undefined") {
                API.chatLog("There is a chat text missing.");
                console.log("There is a chat text missing.");
                return "[Error] No text message found.";
            }
            var lit = '%%';
            for (var prop in obj) {
                chat = chat.replace(lit + prop.toUpperCase() + lit, obj[prop]);
            }
            return chat;
		};


        bot.commands.blowjobCommand = {
            command: 'blowjob', //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            blowjobs: ['sucks your diddly dang cock!!!',
                'grabs you in a wierd way.',
                'tickles your dickle.',
                'sucks your dick SOOOO good.',
                'does a favour for you ;)))))).',
                'enjoys the outer reaches of your nether area.',
                'grabs your fucking dick111111',
                'licks your balls11!!!'
            ],
            getBlowjob: 
				function() {
                var c = Math.floor(Math.random() * this.blowjobs.length);
                return this.blowjobs[c];
            },
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    var msg = chat.message;
					var name;
                    var space = msg.indexOf(' ');
                    if (chat.un === msg.substring(10)) {
                        name = chat.un;
                        API.sendChat(subChat(bot.chat.autofellatio, {name: name}));
                        return false;
                    } else {
                        name = msg.substring(space + 2);
                        var user = bot.userUtilities.lookupUserName(name);
                        if (user === false || !user.inRoom) {
                            return API.sendChat(subChat(bot.chat.nouserblowjob, {name: chat.un}));
                        } else if (msg.substring(10) === "Botu") {
                            name = msg.substring(space + 2);
                            return API.sendChat(subChat(bot.chat.botjob, {name: name}));
                        } else {
                            return API.sendChat(subChat(bot.chat.blowjob, {nameto: user.username, namefrom: chat.un,blowjob: this.getBlowjob()}));
                        }
                    }
                }
            }
        };

        bot.commands.shipCommand = {
            command: 'ship',
            rank: 'user',
            type: 'startsWith',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {

                    var msg = chat.message;
                    var space = msg.indexOf(' ');
                    var name = msg.substring(space + 2);




                    if (msg.substring(6) !== "") {
                        if (shipNames[0] === null) {
                            shipNames[0] = msg.substring(6);
                            return API.sendChat(subChat(bot.chat.newship, {name: chat.un, shipname: msg.substring(6)}));
                        } else {
                            var i = (shipNames.length);
                            shipNames[i] = msg.substring(6);

                            return API.sendChat(subChat(bot.chat.newship, {name: chat.un, shipname: msg.substring(6)}));

                        }

                    }


                }
            }
        };

        bot.commands.showShipCommand = {
            command: 'showships',
            rank: 'user',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    var text = "";
                    var i;
                    for (i = 0; i < shipNames.length; i++) {

                        text += shipNames[i] + "[" + i + "]" + ", ";


                    }


                    return API.sendChat(subChat(bot.chat.showships, {ships: text}));
                }
            }
        };

bot.commands.botuPlsCommand = {
            command: 'botupls',
            rank: 'bouncer',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                                        {
                        API.sendChat(bot.chat.reload);
                        bot.disconnectAPI();
                        bot.kill();
                        setTimeout(function () {
                            $.getScript("https://www.atuw.org/botuw/extension.js");
                        }, 2000);
                    }
                                }
                        }
};

bot.commands.shitCommand = {
         command: 'takeashit',
         rank: 'user',
         type: 'exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         API.sendChat("/me B-Baka http://i.imgur.com/O3cMxfm.png");
         }
         }
         };	
		 
bot.commands.nerfCommand = {
         command: 'nerf',
         rank: 'user',
         type: 'startsWith',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
			var msg = chat.message;
			var name;
            var space = msg.indexOf(' ');
            if (chat.un === msg.substring(7)) {
                name = chat.un;
                API.sendChat(subChat(bot.chat.selfnerf, {name: name}));
                return false;
            } else {
                name = msg.substring(space + 2);
                var user = bot.userUtilities.lookupUserName(name);
                if (user === false || !user.inRoom) {
                    return API.sendChat(subChat(bot.chat.nousernerf, {name: chat.un}));
                } else if (msg.substring(7) === "Botu") {
                    name = chat.un
                    return API.sendChat(subChat(bot.chat.botnerf, {name: name}));
                } else {
                    return API.sendChat(subChat(bot.chat.nerf, {nameto: user.username, namefrom: chat.un}));
                }
            }
        }
        }
        };	
	
        bot.commands.shipVoteCommand = {
            command: 'voteship',
            rank: 'user',
            type: 'startsWith',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    var msg = chat.message;
                    var space = msg.indexOf(' ');
                    if (space === -1) {
                        var name = chat.un;
                        API.sendChat(subChat(bot.chat.failvote));
                        return false;
                    } else {
                        var voteIndex = parseInt(msg.substring(9));
                        shipVotes[voteIndex] = (shipVotes[voteIndex] === null) ? 0 : shipVotes[voteIndex];
                        shipVotes[voteIndex] = shipVotes[voteIndex] + 1;
                        var text = "";
                        var i;
                        for (o = 0; o < shipNames.length; o++) {
                            shipVotes[o] = (shipVotes[o] === null) ? 0 : shipVotes[o];
                            text += "'" + shipNames[o] + "'" + " has " + shipVotes[o] + " vote(s), ";
                        }
                        return API.sendChat(subChat(bot.chat.shipvotes, {ships: text}));
                    }
                }
            }
        };
    //GRAB VOTES
    var votedUsers = [];

	var playlist = 0;
	
    
	///////////////TIMERS///////////
	function checktimeTimer() {
		if (dj === undefined) {
			return API.djJoin();
		}
		else {
			return API.djLeave()
		}
	}
	
function countdownTimer() {
                if (votedUsers.length < 3) {
					votedUsers = [];
					countdown = null;				
					return API.sendChat(subChat(bot.chat.failgrab));
                }
				else {
					votedUsers = [];
					countdown = null;
				}
            }
		//////////////////FUNCTIONS////////////////	
    function selectPlaylist() {
        playlists = $('#playlist-menu .menu .row');
        for (i = 0; i < playlists.length; i++) {
            if (playlists[i].querySelector('.icon-active-active') !== null) {
                if (playlist !== i) {
                    API.chatLog("Active playlist: " + playlists[i].querySelector("span.name").innerText);
                }
                playlist = i;
                break;
            }
        }
        if (playlist == -1) {
            API.chatLog("I'm sorry, I wasn't able to find an active playlist. Please create a playlist and activate it.", 1);
            if (enabled) {
                API.chatLog("Auto Grab disabled");
                enabled = false;
                playlist = -1;
            }
        }

    };
	function grab() {
        selectPlaylist();
        if (playlist > -1) {
            if (API.getDJ().id !== API.getUser().id && !(document.querySelector('div#grab.selected'))) {
                $("div#grab").click();
                $($(".grab .menu ul li")[playlist]).mousedown();
            }
        }
    };
	//////////////////////////////////
        bot.commands.grabCommand = {
            command: 'votegrab',
            rank: 'user',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
					var time =  (API.getTimeRemaining() * 1000);
					var checkuser = votedUsers.indexOf(chat.un);
					if (checkuser != -1) {
						return API.sendChat(subChat(bot.chat.alreadyvoted, {name: chat.un}));
					}
					else {
						if (votedUsers.length === 0) {
							votedUsers.push(chat.un);
							var countdown = setTimeout(function(){ countdownTimer(); }, time);
							return API.sendChat(subChat(bot.chat.newvote, {name: chat.un}));
						} else if (votedUsers.length == 1) {
							votedUsers.push(chat.un);
							return API.sendChat(subChat(bot.chat.addvote, {votes: votedUsers.length, name: chat.un}));
							}
						else if (votedUsers.length == 2) {
							votedUsers.push(chat.un);
							grab();
							return API.sendChat(subChat(bot.chat.grab, {votes: votedUsers.length, name: chat.un}));
							}
						else {
							return API.sendChat(subChat(bot.chat.grabbed));
							}
						}
					}
				}
			};
			
	var waitlistwatch = false;
	var dj = API.getDJ()
		bot.commands.waitlistwatchCommand = {
            command: 'waitlistwatch',
            rank: 'manager',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
					if (waitlistwatch === false) {
						waitlistwatch = true;
						var checktime = setInterval(function(){ checktimeTimer(); }, 180000);
						return API.sendChat(subChat(bot.chat.waitlistwatchtrue));	
					}
					else {
						waitlistwatch = false;
						checktime = null;
						return API.sendChat(subChat(bot.chat.waitlistwatchfalse));
					}
				}
			}
		};
    
	
        //Load the chat package again to account for any changes
        bot.loadChat();
	}

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Botu",
        language: "english",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        cmdDeletion: true,
        chatLink: "https://atuw.org/botuw/lang/en.json",
        maximumAfk: 15,
        afkRemoval: true,
        maximumDc: 600,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 3,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 60,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://www.evenburgers.com/img/Drawings/RuleList.png",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://www.blankmediagames.com/phpbb/viewtopic.php?f=5&t=16748",
        intervalMessages: ["B-b-b-baka!", "Stupid baka! I-It's not like that was my favorite song or anything...", "Stupid Onii-san! You shouldn't play songs like that...", "Atuw and Burgy are my OTC <3", "I-It's not like I like you or anything... B-Baka!", "I-It's notlike I want to kill you or anything... B-Baka!"],
        messageInterval: 3,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://atuw.org/botuw/op.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);