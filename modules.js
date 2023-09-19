/********* CLOCK *********/
        {
                module: "MMM-DigClock",
                position: "top_center", // This can be any of the regions.
                config: {
                        timeFormat: 12,
                        showDate: true,
                        showWeek: false,
                        dateFormat: "dddd, MMMM 
D",
                        showSeconds: false,
                        timezone: "America/Denver"
                }
        },
/********* Spotify ********/
{
  module: "MMM-Spotify",
  position: "bottom_bar", // "bottom_bar" or "top_bar" for miniBar
  config: {
    debug: false, // debug mode
    style: "mini", // "default" or "mini" available (inactive for miniBar)
    moduleWidth: 400, // width of the module in px
    control: "default", // "default" or "hidden"
    showAlbumLabel: true, // if you want to show the label for the current song album
    showVolumeLabel: false, // if you want to show the label for the current volume
    showAccountName: false, // also show the current account name in the device label; usefull for multi account setup
    showAccountButton: false, // if you want to show the "switch account" control button
    showDeviceButton: false, // if you want to show the "switch device" control button
    useExternalModal: false, // if you want to use MMM-Modal for account and device popup selection instead of the build-in one (which is restricted to the album image size)
    updateInterval: 1000, // update interval when playing
    idleInterval: 10000, // update interval on idle
    defaultAccount: 0, // default account number, attention : 0 is the first account
    defaultDevice: null, // optional - if you want the "SPOTIFY_PLAY" notification to also work from "idle" status, you have to define your default device here (by name)
    allowDevices: [], //If you want to limit devices to display info, use this. f.e. allowDevices: ["RASPOTIFY", "My Home speaker"],
    onStart: null, // disable onStart feature with `null`
    // if you want to send custom notifications when suspending the module, f.e. switch MMM-Touch to a different "mode"
    notificationsOnSuspend: [
      {
        notification: "TOUCH_SET_MODE",
        payload: "myNormalMode",
      },
      {
        notification: "WHATEVERYOUWANT",
        payload: "sendMe",
      }
    ],
    // if you want to send custom notifications when resuming the module, f.e. switch MMM-Touch to a different "mode"
    notificationsOnResume: [
      {
        notification: "TOUCH_SET_MODE",
        payload: "mySpotifyControlMode",
      },
    ],
    deviceDisplay: "Listening on", // text to display in the device block (default style only)
    volumeSteps: 5, // in percent, the steps you want to increase or decrese volume when reacting on the "SPOTIFY_VOLUME_{UP,DOWN}" notifications
    // miniBar is no longer supported, use at your own "risk". Will be removed in a future version
    miniBarConfig: {
      album: true, // display Album name in miniBar style
      scroll: true, // scroll title / artist / album in miniBar style
      logo: true, // display Spotify logo in miniBar style
    }
  }
},

/********* Screencast *********/
        {
                module: 'MMM-Screencast',
                position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
                config: {
                        position: 'center',
                        height: 300,
                        width: 500,
                }
        },

/********* RSS *********/
  {
    module: "newsfeed",
    position: "bottom_bar", // This can be any of the regions. Best results in center regions.
    config: {
      // The config property is optional.
      // If no config is set, an example calendar is shown.
      // See 'Configuration options' for more information.
	showDescription: true,
	wrapDescription: true,
	lengthDescription: 400,

      feeds: [
        {
          title: "The Onion",
          url: "https://www.theonion.com/rss",
        },
      ],
    },
  },

