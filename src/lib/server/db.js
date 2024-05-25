import sqlite from "better-sqlite3";
import { DB_PATH } from "$env/static/private";

export const db = sqlite(DB_PATH);
