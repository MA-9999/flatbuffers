// automatically generated by the FlatBuffers compiler, do not modify
import { StructOfStructs } from '../../my-game/example/struct-of-structs.js';
export class StructOfStructsOfStructs {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    a(obj) {
        return (obj || new StructOfStructs()).__init(this.bb_pos, this.bb);
    }
    static getFullyQualifiedName() {
        return 'MyGame_Example_StructOfStructsOfStructs';
    }
    static sizeOf() {
        return 20;
    }
    static createStructOfStructsOfStructs(builder, a_a_id, a_a_distance, a_b_a, a_b_b, a_c_id, a_c_distance) {
        builder.prep(4, 20);
        builder.prep(4, 20);
        builder.prep(4, 8);
        builder.writeInt32(a_c_distance);
        builder.writeInt32(a_c_id);
        builder.prep(2, 4);
        builder.pad(1);
        builder.writeInt8(a_b_b);
        builder.writeInt16(a_b_a);
        builder.prep(4, 8);
        builder.writeInt32(a_a_distance);
        builder.writeInt32(a_a_id);
        return builder.offset();
    }
    unpack() {
        return new StructOfStructsOfStructsT((this.a() !== null ? this.a().unpack() : null));
    }
    unpackTo(_o) {
        _o.a = (this.a() !== null ? this.a().unpack() : null);
    }
}
export class StructOfStructsOfStructsT {
    constructor(a = null) {
        this.a = a;
    }
    pack(builder) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _p, _q, _r, _s, _t, _u;
        return StructOfStructsOfStructs.createStructOfStructsOfStructs(builder, ((_c = (_b = (_a = this.a) === null || _a === void 0 ? void 0 : _a.a) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : 0), ((_f = (_e = (_d = this.a) === null || _d === void 0 ? void 0 : _d.a) === null || _e === void 0 ? void 0 : _e.distance) !== null && _f !== void 0 ? _f : 0), ((_j = (_h = (_g = this.a) === null || _g === void 0 ? void 0 : _g.b) === null || _h === void 0 ? void 0 : _h.a) !== null && _j !== void 0 ? _j : 0), ((_m = (_l = (_k = this.a) === null || _k === void 0 ? void 0 : _k.b) === null || _l === void 0 ? void 0 : _l.b) !== null && _m !== void 0 ? _m : 0), ((_r = (_q = (_p = this.a) === null || _p === void 0 ? void 0 : _p.c) === null || _q === void 0 ? void 0 : _q.id) !== null && _r !== void 0 ? _r : 0), ((_u = (_t = (_s = this.a) === null || _s === void 0 ? void 0 : _s.c) === null || _t === void 0 ? void 0 : _t.distance) !== null && _u !== void 0 ? _u : 0));
    }
}