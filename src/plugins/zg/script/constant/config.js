export const DOMAIN =
  process.env.NODE_ENV === "development" ? "localhost" : ".zeongit.cn"

export const API_HOST = process.env.NODE_ENV === "development" ? "/api" : "/api"

export const ACCOUNT_HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:12180"
    : "http://account.zeongit.cn"

export const BEAUTY_HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:12181"
    : "http://beauty.zeongit.cn"

export const QINIU_PICTURE = "http://secdraimg.secdra.com"

export const QINIU_AVATAR = "http://secdrahead.secdra.com"

export const QINIU_BACKGROUND = "http://secdraback.secdra.com"

export const QINIU_SEPARATOR = "-"
