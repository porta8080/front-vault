function DataVaultCookie(){
  this.storage = localStorage;
}

function DataVaultSession(){
  this.storage = sessionStorage;
}

function DataVault(){
  this.cookie = new DataVaultCookie();
  this.session = new DataVaultSession();
}

DataVault.prototype.set = function(key,value){
  this.storage.setItem(key,value);
};

DataVault.prototype.get = function(key){
  return this.storage.getItem(key);
};

DataVault.prototype.has = function(key){
  return key in this.storage;
};

DataVault.prototype.remove = function(key){
  this.storage.removeItem(key);
};

DataVault.prototype.clear = function(){
  this.storage.clear();
};

DataVaultCookie.prototype = Object.create(DataVault.prototype);
DataVaultSession.prototype = Object.create(DataVault.prototype);

DataVault = new DataVault();
