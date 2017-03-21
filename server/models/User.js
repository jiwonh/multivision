var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: { type: String, required: '{PATH} is required!' },
    lastName: { type: String, required: '{PATH} is required!' },
    username: { type: String, required: '{PATH} is required!', unique: true },
    salt: String,
    hashed_pwd: String,
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },

    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}, function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'jiwon');
            User.create({ firstName: "Jiwon", lastName: "Han", username: "jiwon", salt: salt, hashed_pwd: hash, roles: ['admin'] });
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'juu');
            User.create({ firstName: "Juyoung", lastName: "Kim", username: "juu", salt: salt, hashed_pwd: hash, roles: [] });
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'yuja');
            User.create({ firstName: "Yujin", lastName: "Han", username: "yuja", salt: salt, hashed_pwd: hash });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;


