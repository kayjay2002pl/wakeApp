import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("jurowicz_kacper_1.db");

class Database {
    static createTable() {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, time text, set integer, pon integer, wt integer, sr integer, czw integer, pt integer, sob integer, nd integer);"
            );
        });
    }

    static add() {
        db.transaction(
            tx => {
                tx.executeSql("INSERT INTO alarms (a, b) values ('xxx', 'yyy')");
            }, function (tx, error) {

                reject(error);

            });
    }
    static getAll() {
        var query = "SELECT * FROM alarms";
        //
        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                console.log(JSON.stringify(results))

                resolve(JSON.stringify(results));

            }, function (tx, error) {

                reject(error);

            });
        }))
    }

    static update(id, which, val) {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE alarms SET " + which + "='" + val + "' WHERE id=" + id + ";"
            );
        });
    }

    static remove(id) {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM alarms WHERE (id = " + id + ");");
        });
    }

    static removeAll() {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM alarms");
        });
    }
}

export default Database;