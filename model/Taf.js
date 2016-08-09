/**
 * Created by dg on 2016/8/9.
 */
var Taf = Taf || {};
Taf.INT8 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt8(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt8(e, !0, r)
    }, this._className = function () {
        return Taf.CHAR
    }
}, Taf.INT16 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt16(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt16(e, !0, r)
    }, this._className = function () {
        return Taf.SHORT
    }
}, Taf.INT32 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt32(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt32(e, !0, r)
    }, this._className = function () {
        return Taf.INT32
    }
}, Taf.INT64 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt64(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt64(e, !0, r)
    }, this._className = function () {
        return Taf.INT64
    }
}, Taf.UINT8 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt16(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt16(e, !0, r)
    }, this._className = function () {
        return Taf.SHORT
    }
}, Taf.UInt16 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt32(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt32(e, !0, r)
    }, this._className = function () {
        return Taf.INT32
    }
}, Taf.UInt32 = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt64(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt64(e, !0, r)
    }, this._className = function () {
        return Taf.INT64
    }
}, Taf.Float = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeFloat(e, r)
    }, this._read = function (t, e, r) {
        return t.readFloat(e, !0, r)
    }, this._className = function () {
        return Taf.FLOAT
    }
}, Taf.Double = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeDouble(e, r)
    }, this._read = function (t, e, r) {
        return t.readDouble(e, !0, r)
    }, this._className = function () {
        return Taf.DOUBLE
    }
}, Taf.STRING = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeString(e, r)
    }, this._read = function (t, e, r) {
        return t.readString(e, !0, r)
    }, this._className = function () {
        return Taf.STRING
    }
}, Taf.BOOLEAN = function () {
    this._clone = function () {
        return !1
    }, this._write = function (t, e, r) {
        return t.writeBoolean(e, r)
    }, this._read = function (t, e, r) {
        return t.readBoolean(e, !0, r)
    }, this._className = function () {
        return Taf.BOOLEAN
    }
}, Taf.ENUM = function () {
    this._clone = function () {
        return 0
    }, this._write = function (t, e, r) {
        return t.writeInt32(e, r)
    }, this._read = function (t, e, r) {
        return t.readInt32(e, !0, r)
    }
}, Taf.Vector = function (t) {
    this.proto = t, this.value = new Array
}, Taf.Vector.prototype._clone = function () {
    return new Taf.Vector(this.proto)
}, Taf.Vector.prototype._write = function (t, e, r) {
    return t.writeVector(e, r)
}, Taf.Vector.prototype._read = function (t, e, r) {
    return t.readVector(e, !0, r)
}, Taf.Vector.prototype._className = function () {
    return Taf.TypeHelp.VECTOR.replace("$t", this.proto._className())
}, Taf.Map = function (t, e) {
    this.kproto = t, this.vproto = e, this.value = new Object
}, Taf.Map.prototype._clone = function () {
    return new Taf.Map(this.kproto, this.vproto)
}, Taf.Map.prototype._write = function (t, e, r) {
    return t.writeMap(e, r)
}, Taf.Map.prototype._read = function (t, e, r) {
    return t.readMap(e, !0, r)
}, Taf.Map.prototype.put = function (t, e) {
    this.value[t] = e
}, Taf.Map.prototype.get = function (t) {
    return this.value[t]
}, Taf.Map.prototype.remove = function (t) {
    delete this.value[t]
}, Taf.Map.prototype.clear = function () {
    this.value = new Object
}, Taf.Map.prototype.size = function () {
    var t = 0;
    for (var e in this.value)t++;
    return t
}, Taf.Vector.prototype._className = function () {
    return Taf.TypeHelp.Map.replace("$k", this.kproto._className()).replace("$v", this.vproto._className())
};
var Taf = Taf || {};
Taf.DataHelp = {
    EN_INT8: 0,
    EN_INT16: 1,
    EN_INT32: 2,
    EN_INT64: 3,
    EN_FLOAT: 4,
    EN_DOUBLE: 5,
    EN_STRING1: 6,
    EN_STRING4: 7,
    EN_MAP: 8,
    EN_LIST: 9,
    EN_STRUCTBEGIN: 10,
    EN_STRUCTEND: 11,
    EN_ZERO: 12,
    EN_SIMPLELIST: 13
}, Taf.TypeHelp = {
    BOOLEAN: "bool",
    CHAR: "char",
    SHORT: "short",
    INT32: "int32",
    INT64: "int64",
    FLOAT: "float",
    DOUBLE: "double",
    STRING: "string",
    VECTOR: "list<$t>",
    MAP: "map<$k, $v>"
}, Taf.BinBuffer = function (t) {
    this.buf = null, this.vew = null, this.len = 0, this.position = 0, null != t && void 0 != t && t instanceof Taf.BinBuffer && (this.buf = t.buf, this.vew = new DataView(this.buf), this.len = t.length, this.position = t.position), null != t && void 0 != t && t instanceof ArrayBuffer && (this.buf = t, this.vew = new DataView(this.buf), this.len = this.vew.byteLength, this.position = 0), this.__defineGetter__("length", function () {
        return this.len
    }), this.__defineGetter__("buffer", function () {
        return this.buf
    })
}, Taf.BinBuffer.prototype._write = function (t, e, r) {
    return t.writeBytes(e, r)
}, Taf.BinBuffer.prototype._read = function (t, e, r) {
    return t.readBytes(e, !0, r)
}, Taf.BinBuffer.prototype._clone = function () {
    return new Taf.BinBuffer
}, Taf.BinBuffer.prototype.allocate = function (t) {
    if (t = this.position + t, !(null != this.buf && this.buf.length > t)) {
        var e = new ArrayBuffer(Math.max(256, 2 * t));
        null != this.buf && (new Uint8Array(e).set(new Uint8Array(this.buf)), this.buf = void 0), this.buf = e, this.vew = void 0, this.vew = new DataView(this.buf)
    }
}, Taf.BinBuffer.prototype.getBuffer = function () {
    var t = new ArrayBuffer(this.len);
    return new Uint8Array(t).set(new Uint8Array(this.buf, 0, this.len)), t
}, Taf.BinBuffer.prototype.memset = function (t, e, r) {
    this.allocate(r), new Uint8Array(this.buf).set(new Uint8Array(t, e, r), this.position)
}, Taf.BinBuffer.prototype.writeInt8 = function (t) {
    this.allocate(1), this.vew.setInt8(this.position, t), this.position += 1, this.len = this.position
}, Taf.BinBuffer.prototype.writeUInt8 = function (t) {
    this.allocate(1), this.vew.setUint8(this.position++, t), this.len = this.position
}, Taf.BinBuffer.prototype.writeInt16 = function (t) {
    this.allocate(2), this.vew.setInt16(this.position, t), this.position += 2, this.len = this.position
}, Taf.BinBuffer.prototype.writeUInt16 = function (t) {
    this.allocate(2), this.vew.setUint16(this.position, t), this.position += 2, this.len = this.position
}, Taf.BinBuffer.prototype.writeInt32 = function (t) {
    this.allocate(4), this.vew.setInt32(this.position, t), this.position += 4, this.len = this.position
}, Taf.BinBuffer.prototype.writeUInt32 = function (t) {
    this.allocate(4), this.vew.setUint32(this.position, t), this.position += 4, this.len = this.position
}, Taf.BinBuffer.prototype.writeInt64 = function (t) {
    this.allocate(8), this.vew.setUint32(this.position, parseInt(t / 4294967296)), this.vew.setUint32(this.position + 4, t % 4294967296), this.position += 8, this.len = this.position
}, Taf.BinBuffer.prototype.writeFloat = function (t) {
    this.allocate(4), this.vew.setFloat32(this.position, t), this.position += 4, this.len = this.position
}, Taf.BinBuffer.prototype.writeDouble = function (t) {
    this.allocate(8), this.vew.setFloat64(this.position, t), this.position += 8, this.len = this.position
}, Taf.BinBuffer.prototype.writeString = function (t) {
    for (var e = [], r = 0; r < t.length; r++)e.push(255 & t.charCodeAt(r));
    this.allocate(e.length), new Uint8Array(this.buf).set(new Uint8Array(e), this.position), this.position += e.length, this.len = this.position
}, Taf.BinBuffer.prototype.writeBytes = function (t) {
    0 != t.length && null != t.buf && (this.allocate(t.length), new Uint8Array(this.buf).set(new Uint8Array(t.buf, 0, t.length), this.position), this.position += t.length, this.len = this.position)
}, Taf.BinBuffer.prototype.readInt8 = function () {
    return this.vew.getInt8(this.position++)
}, Taf.BinBuffer.prototype.readInt16 = function () {
    return this.position += 2, this.vew.getInt16(this.position - 2)
}, Taf.BinBuffer.prototype.readInt32 = function () {
    return this.position += 4, this.vew.getInt32(this.position - 4)
}, Taf.BinBuffer.prototype.readUInt8 = function () {
    return this.position += 1, this.vew.getUint8(this.position - 1)
}, Taf.BinBuffer.prototype.readUInt16 = function () {
    return this.position += 2, this.vew.getUint16(this.position - 2)
}, Taf.BinBuffer.prototype.readUInt32 = function () {
    return this.position += 4, this.vew.getUint32(this.position - 4)
}, Taf.BinBuffer.prototype.readInt64 = function () {
    var t = this.vew.getUint32(this.position), e = this.vew.getUint32(this.position + 4);
    return this.position += 8, 4294967296 * t + e
}, Taf.BinBuffer.prototype.readFloat = function () {
    var t = this.vew.getFloat32(this.position);
    return this.position += 4, t
}, Taf.BinBuffer.prototype.readDouble = function () {
    var t = this.vew.getFloat64(this.position);
    return this.position += 8, t
}, Taf.BinBuffer.prototype.readString = function (t) {
    for (var e = [], r = 0; t > r; r++)e.push(String.fromCharCode(this.vew.getUint8(this.position++)));
    var i = e.join("");
    try {
        i = decodeURIComponent(escape(i))
    } catch (a) {
    }
    return i
}, Taf.BinBuffer.prototype.readBytes = function (t) {
    var e = new Taf.BinBuffer;
    return e.allocate(t), e.memset(this.buf, this.position, t), e.position = 0, e.len = t, this.position = this.position + t, e
}, Taf.JceOutputStream = function () {
    this.buf = new Taf.BinBuffer, this.getBinBuffer = function () {
        return this.buf
    }, this.getBuffer = function () {
        return this.buf.getBuffer()
    }
}, Taf.JceOutputStream.prototype.writeTo = function (t, e) {
    15 > t ? this.buf.writeUInt8(t << 4 & 240 | e) : this.buf.writeUInt16((240 | e) << 8 | t)
}, Taf.JceOutputStream.prototype.writeBoolean = function (t, e) {
    this.writeInt8(t, 1 == e ? 1 : 0)
}, Taf.JceOutputStream.prototype.writeInt8 = function (t, e) {
    0 == e ? this.writeTo(t, Taf.DataHelp.EN_ZERO) : (this.writeTo(t, Taf.DataHelp.EN_INT8), this.buf.writeInt8(e))
}, Taf.JceOutputStream.prototype.writeInt16 = function (t, e) {
    e >= -128 && 127 >= e ? this.writeInt8(t, e) : (this.writeTo(t, Taf.DataHelp.EN_INT16), this.buf.writeInt16(e))
}, Taf.JceOutputStream.prototype.writeInt32 = function (t, e) {
    e >= -32768 && 32767 >= e ? this.writeInt16(t, e) : (this.writeTo(t, Taf.DataHelp.EN_INT32), this.buf.writeInt32(e))
}, Taf.JceOutputStream.prototype.writeInt64 = function (t, e) {
    e >= -2147483648 && 2147483647 >= e ? this.writeInt32(t, e) : (this.writeTo(t, Taf.DataHelp.EN_INT64), this.buf.writeInt64(e))
}, Taf.JceOutputStream.prototype.writeUInt8 = function (t, e) {
    this.writeInt16(t, e)
}, Taf.JceOutputStream.prototype.writeUInt16 = function (t, e) {
    this.writeInt32(t, e)
}, Taf.JceOutputStream.prototype.writeUInt32 = function (t, e) {
    this.writeInt64(t, e)
}, Taf.JceOutputStream.prototype.writeFloat = function (t, e) {
    0 == e ? this.writeTo(t, Taf.DataHelp.EN_ZERO) : (this.writeTo(t, Taf.DataHelp.EN_FLOAT), this.buf.writeFloat(e))
}, Taf.JceOutputStream.prototype.writeDouble = function (t, e) {
    0 == e ? this.writeTo(t, Taf.DataHelp.EN_ZERO) : (this.writeTo(t, Taf.DataHelp.EN_DOUBLE), this.buf.writeDouble(e))
}, Taf.JceOutputStream.prototype.writeStruct = function (t, e) {
    if (void 0 == e.writeTo)throw Error("not defined writeTo Function");
    this.writeTo(t, Taf.DataHelp.EN_STRUCTBEGIN), e.writeTo(this), this.writeTo(0, Taf.DataHelp.EN_STRUCTEND)
}, Taf.JceOutputStream.prototype.writeString = function (t, e) {
    var r = e;
    try {
        r = unescape(encodeURIComponent(r))
    } catch (i) {
    }
    r.length > 255 ? (this.writeTo(t, Taf.DataHelp.EN_STRING4), this.buf.writeUInt32(r.length)) : (this.writeTo(t, Taf.DataHelp.EN_STRING1), this.buf.writeUInt8(r.length)), this.buf.writeString(r)
}, Taf.JceOutputStream.prototype.writeBytes = function (t, e) {
    if (!(e instanceof Taf.BinBuffer))throw Error("value not instanceof Taf.BinBuffer");
    this.writeTo(t, Taf.DataHelp.EN_SIMPLELIST), this.writeTo(0, Taf.DataHelp.EN_INT8), this.writeInt32(0, e.length), this.buf.writeBytes(e)
}, Taf.JceOutputStream.prototype.writeVector = function (t, e) {
    this.writeTo(t, Taf.DataHelp.EN_LIST), this.writeInt32(0, e.value.length);
    for (var r = 0; r < e.value.length; r++)e.proto._write(this, 0, e.value[r])
}, Taf.JceOutputStream.prototype.writeMap = function (t, e) {
    this.writeTo(t, Taf.DataHelp.EN_MAP), this.writeInt32(0, e.size());
    for (var r in e.value)e.kproto._write(this, 0, r), e.vproto._write(this, 1, e.value[r])
}, Taf.JceInputStream = function (t) {
    this.buf = new Taf.BinBuffer(t)
}, Taf.JceInputStream.prototype.readFrom = function () {
    var t = this.buf.readUInt8(), e = (240 & t) >> 4, r = 15 & t;
    return e >= 15 && (e = this.buf.readUInt8()), {tag: e, type: r}
}, Taf.JceInputStream.prototype.peekFrom = function () {
    var t = this.buf.position, e = this.readFrom();
    return this.buf.position = t, {tag: e.tag, type: e.type, size: e.tag >= 15 ? 2 : 1}
}, Taf.JceInputStream.prototype.skipField = function (t) {
    switch (t) {
        case Taf.DataHelp.EN_INT8:
            this.buf.position += 1;
            break;
        case Taf.DataHelp.EN_INT16:
            this.buf.position += 2;
            break;
        case Taf.DataHelp.EN_INT32:
            this.buf.position += 4;
            break;
        case Taf.DataHelp.EN_STRING1:
            var e = this.buf.readUInt8();
            this.buf.position += e;
            break;
        case Taf.DataHelp.EN_STRING4:
            var r = this.buf.readInt32();
            this.buf.position += r;
            break;
        case Taf.DataHelp.EN_STRUCTBEGIN:
            this.skipToStructEnd();
            break;
        case Taf.DataHelp.EN_STRUCTEND:
        case Taf.DataHelp.EN_ZERO:
            break;
        case Taf.DataHelp.EN_MAP:
            for (var i = this.readInt32(0, !0), a = 0; 2 * i > a; ++a) {
                var n = this.readFrom();
                this.skipField(n.type)
            }
            break;
        case Taf.DataHelp.EN_SIMPLELIST:
            var n = this.readFrom();
            if (n.type != Taf.DataHelp.EN_INT8)throw Error("skipField with invalid type, type value: " + t + "," + n.type);
            this.buf.position += this.readInt32(0, !0);
            break;
        case Taf.DataHelp.EN_LIST:
            for (var i = this.readInt32(0, !0), a = 0; i > a; ++a) {
                var n = this.readFrom();
                this.skipField(n.type)
            }
            break;
        default:
            throw new Error("skipField with invalid type, type value: " + t)
    }
}, Taf.JceInputStream.prototype.skipToStructEnd = function () {
    for (; ;) {
        var t = this.readFrom();
        if (this.skipField(t.type), t.type == Taf.DataHelp.EN_STRUCTEND)return
    }
}, Taf.JceInputStream.prototype.skipToTag = function (t, e) {
    for (; this.buf.position < this.buf.length;) {
        var r = this.peekFrom();
        if (t <= r.tag || r.type == Taf.DataHelp.EN_STRUCTEND)return r.type == Taf.DataHelp.EN_STRUCTEND ? !1 : t == r.tag;
        this.buf.position += r.size, this.skipField(r.type)
    }
    if (e)throw Error("require field not exist, tag:" + t);
    return !1
}, Taf.JceInputStream.prototype.readBoolean = function (t, e, r) {
    return 1 == this.readInt8(t, e, r) ? !0 : !1
}, Taf.JceInputStream.prototype.readInt8 = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + i.type)
}, Taf.JceInputStream.prototype.readInt16 = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8();
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + i.type)
}, Taf.JceInputStream.prototype.readInt32 = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8();
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16();
        case Taf.DataHelp.EN_INT32:
            return this.buf.readInt32()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + i.type)
}, Taf.JceInputStream.prototype.readInt64 = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8();
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16();
        case Taf.DataHelp.EN_INT32:
            return this.buf.readInt32();
        case Taf.DataHelp.EN_INT64:
            return this.buf.readInt64()
    }
    throw Error("read int64 type mismatch, tag:" + t + ", get type:" + h.type)
}, Taf.JceInputStream.prototype.readFloat = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_FLOAT:
            return this.buf.readFloat()
    }
    throw Error("read float type mismatch, tag:" + t + ", get type:" + h.type)
}, Taf.JceInputStream.prototype.readDouble = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    switch (i.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0;
        case Taf.DataHelp.EN_DOUBLE:
            return this.buf.readDouble()
    }
    throw Error("read double type mismatch, tag:" + t + ", get type:" + h.type)
}, Taf.JceInputStream.prototype.readUInt8 = function (t, e, r) {
    return this.readInt16(t, e, r)
}, Taf.JceInputStream.prototype.readUInt16 = function (t, e, r) {
    return this.readInt32(t, e, r)
}, Taf.JceInputStream.prototype.readUInt32 = function (t, e, r) {
    return this.readInt64(t, e, r)
}, Taf.JceInputStream.prototype.readStruct = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type != Taf.DataHelp.EN_STRUCTBEGIN)throw Error("read struct type mismatch, tag: " + t + ", get type:" + i.type);
    return r.readFrom(this), this.skipToStructEnd(), r
}, Taf.JceInputStream.prototype.readString = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type == Taf.DataHelp.EN_STRING1)return this.buf.readString(this.buf.readUInt8());
    if (i.type == Taf.DataHelp.EN_STRING4)return this.buf.readString(this.buf.readUInt32());
    throw Error("read 'string' type mismatch, tag: " + t + ", get type: " + i.type + ".")
}, Taf.JceInputStream.prototype.readString2 = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type == Taf.DataHelp.EN_STRING1)return this.buf.readBytes(this.buf.readUInt8());
    if (i.type == Taf.DataHelp.EN_STRING4)return this.buf.readBytes(this.buf.readUInt32());
    throw Error("read 'string' type mismatch, tag: " + t + ", get type: " + i.type + ".")
}, Taf.JceInputStream.prototype.readBytes = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type == Taf.DataHelp.EN_SIMPLELIST) {
        var a = this.readFrom();
        if (a.type != Taf.DataHelp.EN_INT8)throw Error("type mismatch, tag:" + t + ",type:" + i.type + "," + a.type);
        var n = this.readInt32(0, !0);
        if (0 > n)throw Error("invalid size, tag:" + t + ",type:" + i.type + "," + a.type);
        return this.buf.readBytes(n)
    }
    if (i.type == Taf.DataHelp.EN_LIST) {
        var n = this.readInt32(0, !0);
        return this.buf.readBytes(n)
    }
    throw Error("type mismatch, tag:" + t + ",type:" + i.type)
}, Taf.JceInputStream.prototype.readVector = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type != Taf.DataHelp.EN_LIST)throw Error("read 'vector' type mismatch, tag: " + t + ", get type: " + i.type);
    var a = this.readInt32(0, !0);
    if (0 > a)throw Error("invalid size, tag: " + t + ", type: " + i.type + ", size: " + a);
    for (var n = 0; a > n; ++n)r.value.push(r.proto._read(this, 0, r.proto._clone()));
    return r
}, Taf.JceInputStream.prototype.readMap = function (t, e, r) {
    if (0 == this.skipToTag(t, e))return r;
    var i = this.readFrom();
    if (i.type != Taf.DataHelp.EN_MAP)throw Error("read 'map' type mismatch, tag: " + t + ", get type: " + i.type);
    var a = this.readInt32(0, !0);
    if (0 > a)throw Error("invalid map, tag: " + t + ", size: " + a);
    for (var n = 0; a > n; n++) {
        var o = r.kproto._read(this, 0, r.kproto._clone()), f = r.vproto._read(this, 1, r.vproto._clone());
        r.put(o, f)
    }
    return r
};
var Taf = Taf || {};
Taf.Wup = function () {
    this.iVersion = 3, this.cPacketType = 0, this.iMessageType = 0, this.iRequestId = 0, this.sServantName = "", this.sFuncName = "", this.sBuffer = new Taf.BinBuffer, this.iTimeout = 0, this.context = new Taf.Map(new Taf.STRING, new Taf.STRING), this.status = new Taf.Map(new Taf.STRING, new Taf.STRING), this.data = new Taf.Map(new Taf.STRING, new Taf.Map(new Taf.STRING, new Taf.BinBuffer)), this.newdata = new Taf.Map(new Taf.STRING, new Taf.BinBuffer)
}, Taf.Wup.prototype.setVersion = function (t) {
    this.iVersion = t
}, Taf.Wup.prototype.getVersion = function () {
    return this.iVersion
}, Taf.Wup.prototype.setServant = function (t) {
    this.sServantName = t
}, Taf.Wup.prototype.setFunc = function (t) {
    this.sFuncName = t
}, Taf.Wup.prototype.setRequestId = function (t) {
    this.iRequestId = t ? t : ++this.iRequestid
}, Taf.Wup.prototype.getRequestId = function () {
    return this.iRequestId
}, Taf.Wup.prototype.setTimeOut = function (t) {
    this.iTimeout = t
}, Taf.Wup.prototype.getTimeOut = function () {
    return this.iTimeout
}, Taf.Wup.prototype.writeTo = function () {
    var t = new Taf.JceOutputStream;
    return t.writeInt16(1, this.iVersion), t.writeInt8(2, this.cPacketType), t.writeInt32(3, this.iMessageType), t.writeInt32(4, this.iRequestId), t.writeString(5, this.sServantName), t.writeString(6, this.sFuncName), t.writeBytes(7, this.sBuffer), t.writeInt32(8, this.iTimeout), t.writeMap(9, this.context), t.writeMap(10, this.status), new Taf.BinBuffer(t.getBuffer())
}, Taf.Wup.prototype.encode = function () {
    var t = new Taf.JceOutputStream;
    3 == this.iVersion ? t.writeMap(0, this.newdata) : t.writeMap(0, this.data), this.sBuffer = t.getBinBuffer();
    var e = new Taf.BinBuffer;
    e = this.writeTo();
    var r = new Taf.BinBuffer;
    return r.writeInt32(4 + e.len), r.writeBytes(e), r
}, Taf.Wup.prototype.writeBoolean = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeBoolean(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.BOOLEAN;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Taf.BinBuffer(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeInt8 = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeInt8(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.CHAR;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Taf.BinBuffer(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeInt16 = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeInt16(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.SHORT;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeInt32 = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeInt32(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.INT32;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeInt64 = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeInt64(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.INT64;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeFloat = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeFloat(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.FLOAT;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeDouble = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeDouble(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = TAF.TypeHelp.DOUBLE;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeString = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeString(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = Taf.TypeHelp.STRING;
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeVector = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeVector(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBinBuffer())); else {
        var i = this.data.get(t), a = e._className();
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeStruct = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeStruct(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = " ";
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeBytes = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeBytes(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = "vec";
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.writeMap = function (t, e) {
    var r = new Taf.JceOutputStream;
    if (r.writeMap(0, e), 3 == this.iVersion)this.newdata.put(t, new Taf.BinBuffer(r.getBuffer())); else {
        var i = this.data.get(t), a = Taf.Util.getClassType(e);
        if (void 0 == i) {
            var n = new Taf.Map(Taf.STRING, Taf.STRING);
            i = n
        }
        i.put(a, new Uint8Array(r.getBuffer())), this.data.put(t, i)
    }
}, Taf.Wup.prototype.readFrom = function (t) {
    this.iVersion = t.readInt16(1, !0), this.cPacketType = t.readInt8(2, !0), this.iMessageType = t.readInt32(3, !0), this.iRequestId = t.readInt32(4, !0), this.sServantName = t.readString(5, !0), this.sFuncName = t.readString(6, !0), this.sBuffer = t.readBytes(7, !0), this.iTimeout = t.readInt32(8, !0), this.context = t.readMap(9, !0), this.status = t.readMap(10, !0)
}, Taf.Wup.prototype.decode = function (t) {
    var e = new Taf.JceInputStream(t), r = e.buf.vew.getInt32(e.buf.position);
    if (4 > r)throw Error("packet length too short");
    e.buf.position += 4, this.readFrom(e), e = new Taf.JceInputStream(this.sBuffer.getBuffer()), 3 == this.iVersion ? (this.newdata.clear(), e.readMap(0, !0, this.newdata)) : (this.data.clear(), e.readMap(0, !0, this.newdata))
}, Taf.Wup.prototype.readBoolean = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readBoolean(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.BOOLEAN, n = e.get(a);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        var i = new Taf.JceInputStream(n);
        r = i.readBoolean(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readInt8 = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readInt8(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.CHAR, n = e.get(a);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        var i = new Taf.JceInputStream(n);
        r = i.readInt8(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readInt16 = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readInt16(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.SHORT, n = e.get(a), i = new Taf.JceInputStream(n);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        r = i.readInt16(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readInt32 = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readInt32(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.INT32, n = e.get(a);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        var i = new Taf.JceInputStream(n);
        r = i.readInt32(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readInt64 = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readInt64(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.INT64, n = e.get(a);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        var i = new Taf.JceInputStream(n);
        r = i.readInt64(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readFloat = function (t) {
    var e, r;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = new Taf.JceInputStream(e.buffer);
        r = i.readFloat(0, !0, r)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var a = Taf.TypeHelp.FLOAT, n = e.get(a);
        if (void 0 == n)throw Error("UniAttribute not found type:" + a);
        var i = new Taf.JceInputStream(n);
        r = i.readFloat(0, !0, r)
    }
    return r
}, Taf.Wup.prototype.readDouble = function (t) {
    var e;
    if (3 == this.iVersion) {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var r = new Taf.JceInputStream(e.buffer);
        def = r.readDouble(0, !0, def)
    } else {
        if (e = this.newdata.get(t), void 0 == e)throw Error("UniAttribute not found key:" + t);
        var i = Taf.TypeHelp.DOUBLE, a = e.get(i);
        if (void 0 == a)throw Error("UniAttribute not found type:" + i);
        var r = new Taf.JceInputStream(a);
        def = r.readDouble(0, !0, def)
    }
    return def
}, Taf.Wup.prototype.readVector = function (t, e, r) {
    var i;
    if (3 == this.iVersion) {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var a = new Taf.JceInputStream(i.buffer);
        e = a.readVector(0, !0, e)
    } else {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var n = i.get(r);
        if (void 0 == n)throw Error("UniAttribute not found type:" + r);
        var a = new Taf.JceInputStream(n);
        e = a.readVector(0, !0, e)
    }
    return e
}, Taf.Wup.prototype.readStruct = function (t, e, r) {
    var i;
    if (3 == this.iVersion) {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var a = new Taf.JceInputStream(i.buffer);
        e = a.readStruct(0, !0, e)
    } else {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var n = i.get(r);
        if (void 0 == n)throw Error("UniAttribute not found type:" + r);
        var a = new Taf.JceInputStream(n);
        e = a.readStruct(0, !0, e)
    }
    return e
}, Taf.Wup.prototype.readMap = function (t, e, r) {
    var i;
    if (3 == this.iVersion) {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var a = new Taf.JceInputStream(i.buffer);
        e = a.readMap(0, !0, e)
    } else {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var n = i.get(r);
        if (void 0 == n)throw Error("UniAttribute not found type:" + r);
        var a = new Taf.JceInputStream(n);
        e = a.readMap(0, !0, e)
    }
    return e
}, Taf.Wup.prototype.readBytes = function (t, e, r) {
    var i;
    if (3 == this.iVersion) {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var a = new Taf.JceInputStream(i.buffer);
        e = a.readBytes(0, !0, e)
    } else {
        if (i = this.newdata.get(t), void 0 == i)throw Error("UniAttribute not found key:" + t);
        var n = i.get(r);
        if (void 0 == n)throw Error("UniAttribute not found type:" + r);
        var a = new Taf.JceInputStream(n);
        e = a.readBytes(0, !0, e)
    }
    return e
};
var Taf = Taf || {};
Taf.Util = Taf.Util || {}, Taf.Util.jcestream = function (t) {
    if (null == t || void 0 == t)return void console.log("Taf.Util.jcestream::value is null or undefined");
    if (!(t instanceof ArrayBuffer))return void console.log("Taf.Util.jcestream::value is not ArrayBuffer");
    for (var e = new Uint8Array(t), r = "", i = 0; i < e.length; i++)0 != i && i % 16 == 0 ? r += "\n" : 0 != i && (r += " "), r += (e[i] > 15 ? "" : "0") + e[i].toString(16);
    console.log(r.toUpperCase())
}, Taf.Util.str2ab = function (t) {
    var e, r = t.length, i = new Array(r);
    for (e = 0; r > e; ++e)i[e] = t.charCodeAt(e);
    return new Uint8Array(i).buffer
}, Taf.Util.ajax = function (t, e, r, i) {
    var a = new XMLHttpRequest;
    a.overrideMimeType("text/plain; charset=x-user-defined");
    var n = function () {
        4 === a.readyState && (200 === a.status || 304 === a.status ? r(Taf.Util.str2ab(a.response)) : i(a.status), a.removeEventListener("readystatechange", n), a = void 0)
    };
    a.addEventListener("readystatechange", n), a.open("post", t), a.send(e)
};
module.exports=Taf;