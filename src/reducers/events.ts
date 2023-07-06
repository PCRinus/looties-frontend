enum ReduxEvents {
  // General events
  LoggedIn = "LOGGED_IN",
  SetConfig = "SET_CONFIG",
  SetCollections = "SET_COLLECTIONS",
  SetSocket = "SET_SOCKET",
  setToken = "SET_TOKEN",
  setStakeStatus = "SET_STAKE_STATUS",
  NewTransaction = "NEW_TRANSACTION",
  SetTransactions = "SET_TRANSACTIONS",
  SetBalance = "SET_BALANCE",
  SetUpdateInventory = "SET_UPDATE_INVENTORY",
  MultiWindow = "SET_MULTIWINDOW",
  OpenModal = "OPEN_MODAL",
  StoreModalData = "STORE_MODAL_DATA",
  CloseModal = "CLOSE_MODAL",
  ChangeName = "CHANGE_NAME",
  ChangeClan = "CHANGE_CLAN",
  ChangeProfilePic = "CHANGE_PROFILE_PIC",
  SetMuteStatus = "SET_MUTE_STATUS",

  // Chat element
  LoadMessages = "LOAD_MESSAGES",
  NewMessage = "NEW_MESSAGE",
  OnlineUsersUpdate = "ONLINE_USERS_UPDATE",

  // Global bet tracker events
  NewBetGlobal = "NEW_BET_GLOBAL",
  NewBetMy = "NEW_BET_MY",

  // Crash game events
  NewMultiplier = "NEW_MULTIPLIER",
  NewBet = "NEW_BET",
  clearBets = "CLEAR_BETS",
  UpdateBets = "UPDATE_BETS",

  // UI actions
  ToggleChat = "TOGGLE_CHAT",
  ToggleSidebar = "TOGGLE_SIDEBAR",
  CloseBottomBar = "CLOSE_BOTTOM_BAR",
  OpenBottomBar = "OPEN_BOTTOM_BAR",

  //Auth actions
  SetJwt = "SET_JWT",

  //User actions
  SetUserData = "SET_USER_DATA",
  SetProfileData = "SET_PROFILE_DATA",
  UserLogout = "USER_LOGOUT",

  //Settings events
  UpdateUserSettings = "UPDATE_USER_SETTINGS",

  //Token
  SetTokensBalance = "SET_TOKEN_BALANCE",
}

export { ReduxEvents };
