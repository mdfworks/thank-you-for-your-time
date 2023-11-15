"undefined" != typeof navigator && function(t1, e1) {
    "function" == typeof define && define.amd ? define(function() {
        return e1(t1);
    }) : "object" == typeof module && module.exports ? module.exports = e1(t1) : (t1.lottie = e1(t1), t1.bodymovin = t1.lottie);
}(window || {}, function(window) {
    "use strict";
    function ProjectInterface() {
        return {};
    }
    function roundValues(t1) {
        bm_rnd = t1 ? Math.round : function(t1) {
            return t1;
        };
    }
    function styleDiv(t1) {
        t1.style.position = "absolute", t1.style.top = 0, t1.style.left = 0, t1.style.display = "block", t1.style.transformOrigin = t1.style.webkitTransformOrigin = "0 0", t1.style.backfaceVisibility = t1.style.webkitBackfaceVisibility = "visible", t1.style.transformStyle = t1.style.webkitTransformStyle = t1.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t1, e1, r1, i1) {
        this.type = t1, this.currentTime = e1, this.totalTime = r1, this.direction = i1 < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t1, e1) {
        this.type = t1, this.direction = e1 < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t1, e1, r1, i1) {
        this.type = t1, this.currentLoop = r1, this.totalLoops = e1, this.direction = i1 < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t1, e1, r1) {
        this.type = t1, this.firstFrame = e1, this.totalFrames = r1;
    }
    function BMDestroyEvent(t1, e1) {
        this.type = t1, this.target = e1;
    }
    function BMRenderFrameErrorEvent(t1, e1) {
        this.type = "renderFrameError", this.nativeError = t1, this.currentTime = e1;
    }
    function BMConfigErrorEvent(t1) {
        this.type = "configError", this.nativeError = t1;
    }
    function BMAnimationConfigErrorEvent(t1, e1) {
        this.type = t1, this.nativeError = e1, this.currentTime = currentTime;
    }
    function HSVtoRGB(t1, e1, r1) {
        var i1, s1, a1, n1, o1, h1, l1, p1;
        switch(h1 = r1 * (1 - e1), l1 = r1 * (1 - (o1 = 6 * t1 - (n1 = Math.floor(6 * t1))) * e1), p1 = r1 * (1 - (1 - o1) * e1), n1 % 6){
            case 0:
                i1 = r1, s1 = p1, a1 = h1;
                break;
            case 1:
                i1 = l1, s1 = r1, a1 = h1;
                break;
            case 2:
                i1 = h1, s1 = r1, a1 = p1;
                break;
            case 3:
                i1 = h1, s1 = l1, a1 = r1;
                break;
            case 4:
                i1 = p1, s1 = h1, a1 = r1;
                break;
            case 5:
                i1 = r1, s1 = h1, a1 = l1;
        }
        return [
            i1,
            s1,
            a1
        ];
    }
    function RGBtoHSV(t1, e1, r1) {
        var i1, s1 = Math.max(t1, e1, r1), a1 = Math.min(t1, e1, r1), n1 = s1 - a1, o1 = 0 === s1 ? 0 : n1 / s1, h1 = s1 / 255;
        switch(s1){
            case a1:
                i1 = 0;
                break;
            case t1:
                i1 = e1 - r1 + n1 * (e1 < r1 ? 6 : 0), i1 /= 6 * n1;
                break;
            case e1:
                i1 = r1 - t1 + 2 * n1, i1 /= 6 * n1;
                break;
            case r1:
                i1 = t1 - e1 + 4 * n1, i1 /= 6 * n1;
        }
        return [
            i1,
            o1,
            h1
        ];
    }
    function addSaturationToRGB(t1, e1) {
        var r1 = RGBtoHSV(255 * t1[0], 255 * t1[1], 255 * t1[2]);
        return r1[1] += e1, 1 < r1[1] ? r1[1] = 1 : r1[1] <= 0 && (r1[1] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
    }
    function addBrightnessToRGB(t1, e1) {
        var r1 = RGBtoHSV(255 * t1[0], 255 * t1[1], 255 * t1[2]);
        return r1[2] += e1, 1 < r1[2] ? r1[2] = 1 : r1[2] < 0 && (r1[2] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
    }
    function addHueToRGB(t1, e1) {
        var r1 = RGBtoHSV(255 * t1[0], 255 * t1[1], 255 * t1[2]);
        return r1[0] += e1 / 360, 1 < r1[0] ? r1[0] -= 1 : r1[0] < 0 && (r1[0] += 1), HSVtoRGB(r1[0], r1[1], r1[2]);
    }
    function BaseEvent() {}
    function createSizedArray(t1) {
        return Array.apply(null, {
            length: t1
        });
    }
    function createNS(t1) {
        return document.createElementNS(svgNS, t1);
    }
    function createTag(t1) {
        return document.createElement(t1);
    }
    function DynamicPropertyContainer() {}
    function extendPrototype(t1, e1) {
        var r1, i1, s1 = t1.length;
        for(r1 = 0; r1 < s1; r1 += 1)for(var a1 in i1 = t1[r1].prototype)i1.hasOwnProperty(a1) && (e1.prototype[a1] = i1[a1]);
    }
    function getDescriptor(t1, e1) {
        return Object.getOwnPropertyDescriptor(t1, e1);
    }
    function createProxyFunction(t1) {
        function e1() {}
        return e1.prototype = t1, e1;
    }
    function bezFunction() {
        function t1(t1, e1, r1, i1, s1, a1) {
            var n1 = t1 * i1 + e1 * s1 + r1 * a1 - s1 * i1 - a1 * t1 - r1 * e1;
            return -0.001 < n1 && n1 < .001;
        }
        function e1(t1) {
            this.segmentLength = 0, this.points = new Array(t1);
        }
        function r1(t1, e1) {
            this.partialLength = t1, this.point = e1;
        }
        function i1(t1, e1) {
            var r1 = e1.percents, i1 = e1.lengths, s1 = r1.length, a1 = bm_floor((s1 - 1) * t1), n1 = t1 * e1.addedLength, o1 = 0;
            if (a1 === s1 - 1 || 0 === a1 || n1 === i1[a1]) return r1[a1];
            for(var h1 = i1[a1] > n1 ? -1 : 1, l1 = !0; l1;)if (i1[a1] <= n1 && i1[a1 + 1] > n1 ? (o1 = (n1 - i1[a1]) / (i1[a1 + 1] - i1[a1]), l1 = !1) : a1 += h1, a1 < 0 || s1 - 1 <= a1) {
                if (a1 === s1 - 1) return r1[a1];
                l1 = !1;
            }
            return r1[a1] + (r1[a1 + 1] - r1[a1]) * o1;
        }
        Math;
        var s1, a1 = function(t1, e1, r1, i1) {
            var s1, a1, n1, o1, h1, l1, p1 = defaultCurveSegments, f1 = 0, m1 = [], c1 = [], d1 = bezier_length_pool.newElement();
            for(n1 = r1.length, s1 = 0; s1 < p1; s1 += 1){
                for(h1 = s1 / (p1 - 1), a1 = l1 = 0; a1 < n1; a1 += 1)o1 = bm_pow(1 - h1, 3) * t1[a1] + 3 * bm_pow(1 - h1, 2) * h1 * r1[a1] + 3 * (1 - h1) * bm_pow(h1, 2) * i1[a1] + bm_pow(h1, 3) * e1[a1], m1[a1] = o1, null !== c1[a1] && (l1 += bm_pow(m1[a1] - c1[a1], 2)), c1[a1] = m1[a1];
                l1 && (f1 += l1 = bm_sqrt(l1)), d1.percents[s1] = h1, d1.lengths[s1] = f1;
            }
            return d1.addedLength = f1, d1;
        }, n1 = (s1 = {}, function(i1, a1, n1, o1) {
            var h1 = (i1[0] + "_" + i1[1] + "_" + a1[0] + "_" + a1[1] + "_" + n1[0] + "_" + n1[1] + "_" + o1[0] + "_" + o1[1]).replace(/\./g, "p");
            if (!s1[h1]) {
                var l1, p1, f1, m1, c1, d1, u1, y1 = defaultCurveSegments, g1 = 0, v1 = null;
                2 === i1.length && (i1[0] != a1[0] || i1[1] != a1[1]) && t1(i1[0], i1[1], a1[0], a1[1], i1[0] + n1[0], i1[1] + n1[1]) && t1(i1[0], i1[1], a1[0], a1[1], a1[0] + o1[0], a1[1] + o1[1]) && (y1 = 2);
                var b1 = new e1(y1);
                for(f1 = n1.length, l1 = 0; l1 < y1; l1 += 1){
                    for(u1 = createSizedArray(f1), c1 = l1 / (y1 - 1), p1 = d1 = 0; p1 < f1; p1 += 1)m1 = bm_pow(1 - c1, 3) * i1[p1] + 3 * bm_pow(1 - c1, 2) * c1 * (i1[p1] + n1[p1]) + 3 * (1 - c1) * bm_pow(c1, 2) * (a1[p1] + o1[p1]) + bm_pow(c1, 3) * a1[p1], u1[p1] = m1, null !== v1 && (d1 += bm_pow(u1[p1] - v1[p1], 2));
                    g1 += d1 = bm_sqrt(d1), b1.points[l1] = new r1(d1, u1), v1 = u1;
                }
                b1.segmentLength = g1, s1[h1] = b1;
            }
            return s1[h1];
        }), o1 = createTypedArray("float32", 8);
        return {
            getSegmentsLength: function(t1) {
                var e1, r1 = segments_length_pool.newElement(), i1 = t1.c, s1 = t1.v, n1 = t1.o, o1 = t1.i, h1 = t1._length, l1 = r1.lengths, p1 = 0;
                for(e1 = 0; e1 < h1 - 1; e1 += 1)l1[e1] = a1(s1[e1], s1[e1 + 1], n1[e1], o1[e1 + 1]), p1 += l1[e1].addedLength;
                return i1 && h1 && (l1[e1] = a1(s1[e1], s1[0], n1[e1], o1[0]), p1 += l1[e1].addedLength), r1.totalLength = p1, r1;
            },
            getNewSegment: function(t1, e1, r1, s1, a1, n1, h1) {
                var l1, p1 = i1(a1 = a1 < 0 ? 0 : 1 < a1 ? 1 : a1, h1), f1 = i1(n1 = 1 < n1 ? 1 : n1, h1), m1 = t1.length, c1 = 1 - p1, d1 = 1 - f1, u1 = c1 * c1 * c1, y1 = p1 * c1 * c1 * 3, g1 = p1 * p1 * c1 * 3, v1 = p1 * p1 * p1, b1 = c1 * c1 * d1, E1 = p1 * c1 * d1 + c1 * p1 * d1 + c1 * c1 * f1, x1 = p1 * p1 * d1 + c1 * p1 * f1 + p1 * c1 * f1, P1 = p1 * p1 * f1, S1 = c1 * d1 * d1, _1 = p1 * d1 * d1 + c1 * f1 * d1 + c1 * d1 * f1, C1 = p1 * f1 * d1 + c1 * f1 * f1 + p1 * d1 * f1, A1 = p1 * f1 * f1, T1 = d1 * d1 * d1, k1 = f1 * d1 * d1 + d1 * f1 * d1 + d1 * d1 * f1, M1 = f1 * f1 * d1 + d1 * f1 * f1 + f1 * d1 * f1, D1 = f1 * f1 * f1;
                for(l1 = 0; l1 < m1; l1 += 1)o1[4 * l1] = Math.round(1e3 * (u1 * t1[l1] + y1 * r1[l1] + g1 * s1[l1] + v1 * e1[l1])) / 1e3, o1[4 * l1 + 1] = Math.round(1e3 * (b1 * t1[l1] + E1 * r1[l1] + x1 * s1[l1] + P1 * e1[l1])) / 1e3, o1[4 * l1 + 2] = Math.round(1e3 * (S1 * t1[l1] + _1 * r1[l1] + C1 * s1[l1] + A1 * e1[l1])) / 1e3, o1[4 * l1 + 3] = Math.round(1e3 * (T1 * t1[l1] + k1 * r1[l1] + M1 * s1[l1] + D1 * e1[l1])) / 1e3;
                return o1;
            },
            getPointInSegment: function(t1, e1, r1, s1, a1, n1) {
                var o1 = i1(a1, n1), h1 = 1 - o1;
                return [
                    Math.round(1e3 * (h1 * h1 * h1 * t1[0] + (o1 * h1 * h1 + h1 * o1 * h1 + h1 * h1 * o1) * r1[0] + (o1 * o1 * h1 + h1 * o1 * o1 + o1 * h1 * o1) * s1[0] + o1 * o1 * o1 * e1[0])) / 1e3,
                    Math.round(1e3 * (h1 * h1 * h1 * t1[1] + (o1 * h1 * h1 + h1 * o1 * h1 + h1 * h1 * o1) * r1[1] + (o1 * o1 * h1 + h1 * o1 * o1 + o1 * h1 * o1) * s1[1] + o1 * o1 * o1 * e1[1])) / 1e3
                ];
            },
            buildBezierData: n1,
            pointOnLine2D: t1,
            pointOnLine3D: function(e1, r1, i1, s1, a1, n1, o1, h1, l1) {
                if (0 === i1 && 0 === n1 && 0 === l1) return t1(e1, r1, s1, a1, o1, h1);
                var p1, f1 = Math.sqrt(Math.pow(s1 - e1, 2) + Math.pow(a1 - r1, 2) + Math.pow(n1 - i1, 2)), m1 = Math.sqrt(Math.pow(o1 - e1, 2) + Math.pow(h1 - r1, 2) + Math.pow(l1 - i1, 2)), c1 = Math.sqrt(Math.pow(o1 - s1, 2) + Math.pow(h1 - a1, 2) + Math.pow(l1 - n1, 2));
                return -0.0001 < (p1 = m1 < f1 ? c1 < f1 ? f1 - m1 - c1 : c1 - m1 - f1 : m1 < c1 ? c1 - m1 - f1 : m1 - f1 - c1) && p1 < 1e-4;
            }
        };
    }
    function dataFunctionManager() {
        function t1(s1, n1, o1) {
            var h1, l1, p1, f1, m1, c1, d1 = s1.length;
            for(l1 = 0; l1 < d1; l1 += 1)if ("ks" in (h1 = s1[l1]) && !h1.completed) {
                if (h1.completed = !0, h1.tt && (s1[l1 - 1].td = h1.tt), h1.hasMask) {
                    var u1 = h1.masksProperties;
                    for(f1 = u1.length, p1 = 0; p1 < f1; p1 += 1)if (u1[p1].pt.k.i) i1(u1[p1].pt.k);
                    else for(c1 = u1[p1].pt.k.length, m1 = 0; m1 < c1; m1 += 1)u1[p1].pt.k[m1].s && i1(u1[p1].pt.k[m1].s[0]), u1[p1].pt.k[m1].e && i1(u1[p1].pt.k[m1].e[0]);
                }
                0 === h1.ty ? (h1.layers = e1(h1.refId, n1), t1(h1.layers, n1, o1)) : 4 === h1.ty ? r1(h1.shapes) : 5 == h1.ty && a1(h1, o1);
            }
        }
        function e1(t1, e1) {
            for(var r1 = 0, i1 = e1.length; r1 < i1;){
                if (e1[r1].id === t1) return e1[r1].layers.__used ? JSON.parse(JSON.stringify(e1[r1].layers)) : (e1[r1].layers.__used = !0, e1[r1].layers);
                r1 += 1;
            }
        }
        function r1(t1) {
            var e1, s1, a1;
            for(e1 = t1.length - 1; 0 <= e1; e1 -= 1)if ("sh" == t1[e1].ty) {
                if (t1[e1].ks.k.i) i1(t1[e1].ks.k);
                else for(a1 = t1[e1].ks.k.length, s1 = 0; s1 < a1; s1 += 1)t1[e1].ks.k[s1].s && i1(t1[e1].ks.k[s1].s[0]), t1[e1].ks.k[s1].e && i1(t1[e1].ks.k[s1].e[0]);
            } else "gr" == t1[e1].ty && r1(t1[e1].it);
        }
        function i1(t1) {
            var e1, r1 = t1.i.length;
            for(e1 = 0; e1 < r1; e1 += 1)t1.i[e1][0] += t1.v[e1][0], t1.i[e1][1] += t1.v[e1][1], t1.o[e1][0] += t1.v[e1][0], t1.o[e1][1] += t1.v[e1][1];
        }
        function s1(t1, e1) {
            var r1 = e1 ? e1.split(".") : [
                100,
                100,
                100
            ];
            return t1[0] > r1[0] || !(r1[0] > t1[0]) && (t1[1] > r1[1] || !(r1[1] > t1[1]) && (t1[2] > r1[2] || !(r1[2] > t1[2]) && void 0));
        }
        function a1(t1, e1) {
            0 !== t1.t.a.length || "m" in t1.t.p || (t1.singleShape = !0);
        }
        var n1, o1 = function() {
            function t1(t1) {
                var e1, r1, i1, s1 = t1.length;
                for(e1 = 0; e1 < s1; e1 += 1)5 === t1[e1].ty && (r1 = t1[e1], i1 = r1.t.d, r1.t.d = {
                    k: [
                        {
                            s: i1,
                            t: 0
                        }
                    ]
                });
            }
            var e1 = [
                4,
                4,
                14
            ];
            return function(r1) {
                if (s1(e1, r1.v) && (t1(r1.layers), r1.assets)) {
                    var i1, a1 = r1.assets.length;
                    for(i1 = 0; i1 < a1; i1 += 1)r1.assets[i1].layers && t1(r1.assets[i1].layers);
                }
            };
        }(), h1 = (n1 = [
            4,
            7,
            99
        ], function(t1) {
            if (t1.chars && !s1(n1, t1.v)) {
                var e1, r1, a1, o1, h1, l1 = t1.chars.length;
                for(e1 = 0; e1 < l1; e1 += 1)if (t1.chars[e1].data && t1.chars[e1].data.shapes) for(a1 = (h1 = t1.chars[e1].data.shapes[0].it).length, r1 = 0; r1 < a1; r1 += 1)(o1 = h1[r1].ks.k).__converted || (i1(h1[r1].ks.k), o1.__converted = !0);
            }
        }), l1 = function() {
            function t1(e1) {
                var r1, i1, s1, a1 = e1.length;
                for(r1 = 0; r1 < a1; r1 += 1)if ("gr" === e1[r1].ty) t1(e1[r1].it);
                else if ("fl" === e1[r1].ty || "st" === e1[r1].ty) {
                    if (e1[r1].c.k && e1[r1].c.k[0].i) for(s1 = e1[r1].c.k.length, i1 = 0; i1 < s1; i1 += 1)e1[r1].c.k[i1].s && (e1[r1].c.k[i1].s[0] /= 255, e1[r1].c.k[i1].s[1] /= 255, e1[r1].c.k[i1].s[2] /= 255, e1[r1].c.k[i1].s[3] /= 255), e1[r1].c.k[i1].e && (e1[r1].c.k[i1].e[0] /= 255, e1[r1].c.k[i1].e[1] /= 255, e1[r1].c.k[i1].e[2] /= 255, e1[r1].c.k[i1].e[3] /= 255);
                    else e1[r1].c.k[0] /= 255, e1[r1].c.k[1] /= 255, e1[r1].c.k[2] /= 255, e1[r1].c.k[3] /= 255;
                }
            }
            function e1(e1) {
                var r1, i1 = e1.length;
                for(r1 = 0; r1 < i1; r1 += 1)4 === e1[r1].ty && t1(e1[r1].shapes);
            }
            var r1 = [
                4,
                1,
                9
            ];
            return function(t1) {
                if (s1(r1, t1.v) && (e1(t1.layers), t1.assets)) {
                    var i1, a1 = t1.assets.length;
                    for(i1 = 0; i1 < a1; i1 += 1)t1.assets[i1].layers && e1(t1.assets[i1].layers);
                }
            };
        }(), p1 = function() {
            function t1(e1) {
                var r1, i1, s1;
                for(r1 = e1.length - 1; 0 <= r1; r1 -= 1)if ("sh" == e1[r1].ty) {
                    if (e1[r1].ks.k.i) e1[r1].ks.k.c = e1[r1].closed;
                    else for(s1 = e1[r1].ks.k.length, i1 = 0; i1 < s1; i1 += 1)e1[r1].ks.k[i1].s && (e1[r1].ks.k[i1].s[0].c = e1[r1].closed), e1[r1].ks.k[i1].e && (e1[r1].ks.k[i1].e[0].c = e1[r1].closed);
                } else "gr" == e1[r1].ty && t1(e1[r1].it);
            }
            function e1(e1) {
                var r1, i1, s1, a1, n1, o1, h1 = e1.length;
                for(i1 = 0; i1 < h1; i1 += 1){
                    if ((r1 = e1[i1]).hasMask) {
                        var l1 = r1.masksProperties;
                        for(a1 = l1.length, s1 = 0; s1 < a1; s1 += 1)if (l1[s1].pt.k.i) l1[s1].pt.k.c = l1[s1].cl;
                        else for(o1 = l1[s1].pt.k.length, n1 = 0; n1 < o1; n1 += 1)l1[s1].pt.k[n1].s && (l1[s1].pt.k[n1].s[0].c = l1[s1].cl), l1[s1].pt.k[n1].e && (l1[s1].pt.k[n1].e[0].c = l1[s1].cl);
                    }
                    4 === r1.ty && t1(r1.shapes);
                }
            }
            var r1 = [
                4,
                4,
                18
            ];
            return function(t1) {
                if (s1(r1, t1.v) && (e1(t1.layers), t1.assets)) {
                    var i1, a1 = t1.assets.length;
                    for(i1 = 0; i1 < a1; i1 += 1)t1.assets[i1].layers && e1(t1.assets[i1].layers);
                }
            };
        }(), f1 = {
            completeData: function(e1, r1) {
                e1.__complete || (l1(e1), o1(e1), h1(e1), p1(e1), t1(e1.layers, e1.assets, r1), e1.__complete = !0);
            }
        };
        return f1.checkColors = l1, f1.checkChars = h1, f1.checkShapes = p1, f1.completeLayers = t1, f1;
    }
    function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    function ShapeModifier() {}
    function TrimModifier() {}
    function RoundCornersModifier() {}
    function PuckerAndBloatModifier() {}
    function RepeaterModifier() {}
    function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    function DashProperty(t1, e1, r1, i1) {
        this.elem = t1, this.frameId = -1, this.dataProps = createSizedArray(e1.length), this.renderer = r1, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e1.length ? e1.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i1);
        var s1, a1, n1 = e1.length || 0;
        for(s1 = 0; s1 < n1; s1 += 1)a1 = PropertyFactory.getProp(t1, e1[s1].v, 0, 0, this), this.k = a1.k || this.k, this.dataProps[s1] = {
            n: e1[s1].n,
            p: a1
        };
        this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    function GradientProperty(t1, e1, r1) {
        this.data = e1, this.c = createTypedArray("uint8c", 4 * e1.p);
        var i1 = e1.k.k[0].s ? e1.k.k[0].s.length - 4 * e1.p : e1.k.k.length - 4 * e1.p;
        this.o = createTypedArray("float32", i1), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i1, this.initDynamicPropertyContainer(r1), this.prop = PropertyFactory.getProp(t1, e1.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    function TextAnimatorProperty(t1, e1, r1) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t1, this._renderType = e1, this._elem = r1, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r1);
    }
    function TextAnimatorDataProperty(t1, e1, r1) {
        var i1 = {
            propType: !1
        }, s1 = PropertyFactory.getProp, a1 = e1.a;
        this.a = {
            r: a1.r ? s1(t1, a1.r, 0, degToRads, r1) : i1,
            rx: a1.rx ? s1(t1, a1.rx, 0, degToRads, r1) : i1,
            ry: a1.ry ? s1(t1, a1.ry, 0, degToRads, r1) : i1,
            sk: a1.sk ? s1(t1, a1.sk, 0, degToRads, r1) : i1,
            sa: a1.sa ? s1(t1, a1.sa, 0, degToRads, r1) : i1,
            s: a1.s ? s1(t1, a1.s, 1, .01, r1) : i1,
            a: a1.a ? s1(t1, a1.a, 1, 0, r1) : i1,
            o: a1.o ? s1(t1, a1.o, 0, .01, r1) : i1,
            p: a1.p ? s1(t1, a1.p, 1, 0, r1) : i1,
            sw: a1.sw ? s1(t1, a1.sw, 0, 0, r1) : i1,
            sc: a1.sc ? s1(t1, a1.sc, 1, 0, r1) : i1,
            fc: a1.fc ? s1(t1, a1.fc, 1, 0, r1) : i1,
            fh: a1.fh ? s1(t1, a1.fh, 0, 0, r1) : i1,
            fs: a1.fs ? s1(t1, a1.fs, 0, .01, r1) : i1,
            fb: a1.fb ? s1(t1, a1.fb, 0, .01, r1) : i1,
            t: a1.t ? s1(t1, a1.t, 0, 0, r1) : i1
        }, this.s = TextSelectorProp.getTextSelectorProp(t1, e1.s, r1), this.s.t = e1.s.t;
    }
    function LetterProps(t1, e1, r1, i1, s1, a1) {
        this.o = t1, this.sw = e1, this.sc = r1, this.fc = i1, this.m = s1, this.p = a1, this._mdf = {
            o: !0,
            sw: !!e1,
            sc: !!r1,
            fc: !!i1,
            m: !0,
            p: !0
        };
    }
    function TextProperty(t1, e1) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e1, this.elem = t1, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    function BaseRenderer() {}
    function SVGRenderer(t1, e1) {
        this.animationItem = t1, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r1 = "";
        if (e1 && e1.title) {
            var i1 = createNS("title"), s1 = createElementID();
            i1.setAttribute("id", s1), i1.textContent = e1.title, this.svgElement.appendChild(i1), r1 += s1;
        }
        if (e1 && e1.description) {
            var a1 = createNS("desc"), n1 = createElementID();
            a1.setAttribute("id", n1), a1.textContent = e1.description, this.svgElement.appendChild(a1), r1 += " " + n1;
        }
        r1 && this.svgElement.setAttribute("aria-labelledby", r1);
        var o1 = createNS("defs");
        this.svgElement.appendChild(o1);
        var h1 = createNS("g");
        this.svgElement.appendChild(h1), this.layerElement = h1, this.renderConfig = {
            preserveAspectRatio: e1 && e1.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
            progressiveLoad: e1 && e1.progressiveLoad || !1,
            hideOnTransparent: !e1 || !1 !== e1.hideOnTransparent,
            viewBoxOnly: e1 && e1.viewBoxOnly || !1,
            viewBoxSize: e1 && e1.viewBoxSize || !1,
            className: e1 && e1.className || "",
            id: e1 && e1.id || "",
            focusable: e1 && e1.focusable,
            filterSize: {
                width: e1 && e1.filterSize && e1.filterSize.width || "100%",
                height: e1 && e1.filterSize && e1.filterSize.height || "100%",
                x: e1 && e1.filterSize && e1.filterSize.x || "0%",
                y: e1 && e1.filterSize && e1.filterSize.y || "0%"
            }
        }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o1,
            renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    function CanvasRenderer(t1, e1) {
        this.animationItem = t1, this.renderConfig = {
            clearCanvas: !e1 || void 0 === e1.clearCanvas || e1.clearCanvas,
            context: e1 && e1.context || null,
            progressiveLoad: e1 && e1.progressiveLoad || !1,
            preserveAspectRatio: e1 && e1.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
            className: e1 && e1.className || "",
            id: e1 && e1.id || ""
        }, this.renderConfig.dpr = e1 && e1.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e1 && e1.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas";
    }
    function HybridRenderer(t1, e1) {
        this.animationItem = t1, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e1 && e1.className || "",
            imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !e1 || !1 !== e1.hideOnTransparent,
            filterSize: {
                width: e1 && e1.filterSize && e1.filterSize.width || "400%",
                height: e1 && e1.filterSize && e1.filterSize.height || "400%",
                x: e1 && e1.filterSize && e1.filterSize.x || "-100%",
                y: e1 && e1.filterSize && e1.filterSize.y || "-100%"
            }
        }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    function MaskElement(t1, e1, r1) {
        this.data = t1, this.element = e1, this.globalData = r1, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var i1, s1 = this.globalData.defs, a1 = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(a1), this.solidPath = "";
        var n1, o1, h1, l1, p1, f1, m1, c1 = this.masksProperties, d1 = 0, u1 = [], y1 = createElementID(), g1 = "clipPath", v1 = "clip-path";
        for(i1 = 0; i1 < a1; i1++)if (("a" !== c1[i1].mode && "n" !== c1[i1].mode || c1[i1].inv || 100 !== c1[i1].o.k || c1[i1].o.x) && (v1 = g1 = "mask"), "s" != c1[i1].mode && "i" != c1[i1].mode || 0 !== d1 ? l1 = null : ((l1 = createNS("rect")).setAttribute("fill", "#ffffff"), l1.setAttribute("width", this.element.comp.data.w || 0), l1.setAttribute("height", this.element.comp.data.h || 0), u1.push(l1)), n1 = createNS("path"), "n" != c1[i1].mode) {
            var b1;
            if (d1 += 1, n1.setAttribute("fill", "s" === c1[i1].mode ? "#000000" : "#ffffff"), n1.setAttribute("clip-rule", "nonzero"), 0 !== c1[i1].x.k ? (v1 = g1 = "mask", m1 = PropertyFactory.getProp(this.element, c1[i1].x, 0, null, this.element), b1 = createElementID(), (p1 = createNS("filter")).setAttribute("id", b1), (f1 = createNS("feMorphology")).setAttribute("operator", "erode"), f1.setAttribute("in", "SourceGraphic"), f1.setAttribute("radius", "0"), p1.appendChild(f1), s1.appendChild(p1), n1.setAttribute("stroke", "s" === c1[i1].mode ? "#000000" : "#ffffff")) : m1 = f1 = null, this.storedData[i1] = {
                elem: n1,
                x: m1,
                expan: f1,
                lastPath: "",
                lastOperator: "",
                filterId: b1,
                lastRadius: 0
            }, "i" == c1[i1].mode) {
                h1 = u1.length;
                var E1 = createNS("g");
                for(o1 = 0; o1 < h1; o1 += 1)E1.appendChild(u1[o1]);
                var x1 = createNS("mask");
                x1.setAttribute("mask-type", "alpha"), x1.setAttribute("id", y1 + "_" + d1), x1.appendChild(n1), s1.appendChild(x1), E1.setAttribute("mask", "url(" + locationHref + "#" + y1 + "_" + d1 + ")"), u1.length = 0, u1.push(E1);
            } else u1.push(n1);
            c1[i1].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i1] = {
                elem: n1,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, c1[i1].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, c1[i1], 3),
                invRect: l1
            }, this.viewData[i1].prop.k || this.drawPath(c1[i1], this.viewData[i1].prop.v, this.viewData[i1]);
        } else this.viewData[i1] = {
            op: PropertyFactory.getProp(this.element, c1[i1].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, c1[i1], 3),
            elem: n1,
            lastPath: ""
        }, s1.appendChild(n1);
        for(this.maskElement = createNS(g1), a1 = u1.length, i1 = 0; i1 < a1; i1 += 1)this.maskElement.appendChild(u1[i1]);
        0 < d1 && (this.maskElement.setAttribute("id", y1), this.element.maskedElement.setAttribute(v1, "url(" + locationHref + "#" + y1 + ")"), s1.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    function HierarchyElement() {}
    function FrameElement() {}
    function TransformElement() {}
    function RenderableElement() {}
    function RenderableDOMElement() {}
    function ProcessedElement(t1, e1) {
        this.elem = t1, this.pos = e1;
    }
    function SVGStyleData(t1, e1) {
        this.data = t1, this.type = t1.ty, this.d = "", this.lvl = e1, this._mdf = !1, this.closed = !0 === t1.hd, this.pElem = createNS("path"), this.msElem = null;
    }
    function SVGShapeData(t1, e1, r1) {
        this.caches = [], this.styles = [], this.transformers = t1, this.lStr = "", this.sh = r1, this.lvl = e1, this._isAnimated = !!r1.k;
        for(var i1 = 0, s1 = t1.length; i1 < s1;){
            if (t1[i1].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
            }
            i1 += 1;
        }
    }
    function SVGTransformData(t1, e1, r1) {
        this.transform = {
            mProps: t1,
            op: e1,
            container: r1
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    function SVGStrokeStyleData(t1, e1, r1) {
        this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = r1, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(t1, e1, r1) {
        this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = r1;
    }
    function SVGGradientFillStyleData(t1, e1, r1) {
        this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.initGradientData(t1, e1, r1);
    }
    function SVGGradientStrokeStyleData(t1, e1, r1) {
        this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.initGradientData(t1, e1, r1), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    function CVShapeData(t1, e1, r1, i1) {
        this.styledShapes = [], this.tr = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        var s1 = 4;
        "rc" == e1.ty ? s1 = 5 : "el" == e1.ty ? s1 = 6 : "sr" == e1.ty && (s1 = 7), this.sh = ShapePropertyFactory.getShapeProp(t1, e1, s1, t1);
        var a1, n1, o1 = r1.length;
        for(a1 = 0; a1 < o1; a1 += 1)r1[a1].closed || (n1 = {
            transforms: i1.addTransformSequence(r1[a1].transforms),
            trNodes: []
        }, this.styledShapes.push(n1), r1[a1].elements.push(n1));
    }
    function BaseElement() {}
    function NullElement(t1, e1, r1) {
        this.initFrame(), this.initBaseData(t1, e1, r1), this.initFrame(), this.initTransform(t1, e1, r1), this.initHierarchy();
    }
    function SVGBaseElement() {}
    function IShapeElement() {}
    function ITextElement() {}
    function ICompElement() {}
    function IImageElement(t1, e1, r1) {
        this.assetData = e1.getAssetData(t1.refId), this.initElement(t1, e1, r1), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
        };
    }
    function ISolidElement(t1, e1, r1) {
        this.initElement(t1, e1, r1);
    }
    function SVGCompElement(t1, e1, r1) {
        this.layers = t1.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t1, e1, r1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
            _placeholder: !0
        };
    }
    function SVGTextElement(t1, e1, r1) {
        this.textSpans = [], this.renderType = "svg", this.initElement(t1, e1, r1);
    }
    function SVGShapeElement(t1, e1, r1) {
        this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t1, e1, r1), this.prevViewData = [];
    }
    function SVGTintFilter(t1, e1) {
        this.filterManager = e1;
        var r1 = createNS("feColorMatrix");
        if (r1.setAttribute("type", "matrix"), r1.setAttribute("color-interpolation-filters", "linearRGB"), r1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r1.setAttribute("result", "f1"), t1.appendChild(r1), (r1 = createNS("feColorMatrix")).setAttribute("type", "matrix"), r1.setAttribute("color-interpolation-filters", "sRGB"), r1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r1.setAttribute("result", "f2"), t1.appendChild(r1), this.matrixFilter = r1, 100 !== e1.effectElements[2].p.v || e1.effectElements[2].p.k) {
            var i1, s1 = createNS("feMerge");
            t1.appendChild(s1), (i1 = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s1.appendChild(i1), (i1 = createNS("feMergeNode")).setAttribute("in", "f2"), s1.appendChild(i1);
        }
    }
    function SVGFillFilter(t1, e1) {
        this.filterManager = e1;
        var r1 = createNS("feColorMatrix");
        r1.setAttribute("type", "matrix"), r1.setAttribute("color-interpolation-filters", "sRGB"), r1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t1.appendChild(r1), this.matrixFilter = r1;
    }
    function SVGGaussianBlurEffect(t1, e1) {
        t1.setAttribute("x", "-100%"), t1.setAttribute("y", "-100%"), t1.setAttribute("width", "300%"), t1.setAttribute("height", "300%"), this.filterManager = e1;
        var r1 = createNS("feGaussianBlur");
        t1.appendChild(r1), this.feGaussianBlur = r1;
    }
    function SVGStrokeEffect(t1, e1) {
        this.initialized = !1, this.filterManager = e1, this.elem = t1, this.paths = [];
    }
    function SVGTritoneFilter(t1, e1) {
        this.filterManager = e1;
        var r1 = createNS("feColorMatrix");
        r1.setAttribute("type", "matrix"), r1.setAttribute("color-interpolation-filters", "linearRGB"), r1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r1.setAttribute("result", "f1"), t1.appendChild(r1);
        var i1 = createNS("feComponentTransfer");
        i1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(i1), this.matrixFilter = i1;
        var s1 = createNS("feFuncR");
        s1.setAttribute("type", "table"), i1.appendChild(s1), this.feFuncR = s1;
        var a1 = createNS("feFuncG");
        a1.setAttribute("type", "table"), i1.appendChild(a1), this.feFuncG = a1;
        var n1 = createNS("feFuncB");
        n1.setAttribute("type", "table"), i1.appendChild(n1), this.feFuncB = n1;
    }
    function SVGProLevelsFilter(t1, e1) {
        this.filterManager = e1;
        var r1 = this.filterManager.effectElements, i1 = createNS("feComponentTransfer");
        (r1[10].p.k || 0 !== r1[10].p.v || r1[11].p.k || 1 !== r1[11].p.v || r1[12].p.k || 1 !== r1[12].p.v || r1[13].p.k || 0 !== r1[13].p.v || r1[14].p.k || 1 !== r1[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i1)), (r1[17].p.k || 0 !== r1[17].p.v || r1[18].p.k || 1 !== r1[18].p.v || r1[19].p.k || 1 !== r1[19].p.v || r1[20].p.k || 0 !== r1[20].p.v || r1[21].p.k || 1 !== r1[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i1)), (r1[24].p.k || 0 !== r1[24].p.v || r1[25].p.k || 1 !== r1[25].p.v || r1[26].p.k || 1 !== r1[26].p.v || r1[27].p.k || 0 !== r1[27].p.v || r1[28].p.k || 1 !== r1[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i1)), (r1[31].p.k || 0 !== r1[31].p.v || r1[32].p.k || 1 !== r1[32].p.v || r1[33].p.k || 1 !== r1[33].p.v || r1[34].p.k || 0 !== r1[34].p.v || r1[35].p.k || 1 !== r1[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i1)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(i1), i1 = createNS("feComponentTransfer")), (r1[3].p.k || 0 !== r1[3].p.v || r1[4].p.k || 1 !== r1[4].p.v || r1[5].p.k || 1 !== r1[5].p.v || r1[6].p.k || 0 !== r1[6].p.v || r1[7].p.k || 1 !== r1[7].p.v) && (i1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(i1), this.feFuncRComposed = this.createFeFunc("feFuncR", i1), this.feFuncGComposed = this.createFeFunc("feFuncG", i1), this.feFuncBComposed = this.createFeFunc("feFuncB", i1));
    }
    function SVGDropShadowEffect(t1, e1) {
        var r1 = e1.container.globalData.renderConfig.filterSize;
        t1.setAttribute("x", r1.x), t1.setAttribute("y", r1.y), t1.setAttribute("width", r1.width), t1.setAttribute("height", r1.height), this.filterManager = e1;
        var i1 = createNS("feGaussianBlur");
        i1.setAttribute("in", "SourceAlpha"), i1.setAttribute("result", "drop_shadow_1"), i1.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i1, t1.appendChild(i1);
        var s1 = createNS("feOffset");
        s1.setAttribute("dx", "25"), s1.setAttribute("dy", "0"), s1.setAttribute("in", "drop_shadow_1"), s1.setAttribute("result", "drop_shadow_2"), this.feOffset = s1, t1.appendChild(s1);
        var a1 = createNS("feFlood");
        a1.setAttribute("flood-color", "#00ff00"), a1.setAttribute("flood-opacity", "1"), a1.setAttribute("result", "drop_shadow_3"), this.feFlood = a1, t1.appendChild(a1);
        var n1 = createNS("feComposite");
        n1.setAttribute("in", "drop_shadow_3"), n1.setAttribute("in2", "drop_shadow_2"), n1.setAttribute("operator", "in"), n1.setAttribute("result", "drop_shadow_4"), t1.appendChild(n1);
        var o1, h1 = createNS("feMerge");
        t1.appendChild(h1), o1 = createNS("feMergeNode"), h1.appendChild(o1), (o1 = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o1, this.feMerge = h1, this.originalNodeAdded = !1, h1.appendChild(o1);
    }
    function SVGMatte3Effect(t1, e1, r1) {
        this.initialized = !1, this.filterManager = e1, this.filterElem = t1, (this.elem = r1).matteElement = createNS("g"), r1.matteElement.appendChild(r1.layerElement), r1.matteElement.appendChild(r1.transformedElement), r1.baseElement = r1.matteElement;
    }
    function SVGEffects(t1) {
        var e1, r1, i1 = t1.data.ef ? t1.data.ef.length : 0, s1 = createElementID(), a1 = filtersFactory.createFilter(s1), n1 = 0;
        for(this.filters = [], e1 = 0; e1 < i1; e1 += 1)r1 = null, 20 === t1.data.ef[e1].ty ? (n1 += 1, r1 = new SVGTintFilter(a1, t1.effectsManager.effectElements[e1])) : 21 === t1.data.ef[e1].ty ? (n1 += 1, r1 = new SVGFillFilter(a1, t1.effectsManager.effectElements[e1])) : 22 === t1.data.ef[e1].ty ? r1 = new SVGStrokeEffect(t1, t1.effectsManager.effectElements[e1]) : 23 === t1.data.ef[e1].ty ? (n1 += 1, r1 = new SVGTritoneFilter(a1, t1.effectsManager.effectElements[e1])) : 24 === t1.data.ef[e1].ty ? (n1 += 1, r1 = new SVGProLevelsFilter(a1, t1.effectsManager.effectElements[e1])) : 25 === t1.data.ef[e1].ty ? (n1 += 1, r1 = new SVGDropShadowEffect(a1, t1.effectsManager.effectElements[e1])) : 28 === t1.data.ef[e1].ty ? r1 = new SVGMatte3Effect(a1, t1.effectsManager.effectElements[e1], t1) : 29 === t1.data.ef[e1].ty && (n1 += 1, r1 = new SVGGaussianBlurEffect(a1, t1.effectsManager.effectElements[e1])), r1 && this.filters.push(r1);
        n1 && (t1.globalData.defs.appendChild(a1), t1.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s1 + ")")), this.filters.length && t1.addRenderableComponent(this);
    }
    function CVContextData() {
        var t1;
        for(this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t1 = 0; t1 < 15; t1 += 1)this.saved[t1] = createTypedArray("float32", 16);
        this._length = 15;
    }
    function CVBaseElement() {}
    function CVImageElement(t1, e1, r1) {
        this.assetData = e1.getAssetData(t1.refId), this.img = e1.imageLoader.getImage(this.assetData), this.initElement(t1, e1, r1);
    }
    function CVCompElement(t1, e1, r1) {
        this.completeLayers = !1, this.layers = t1.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t1, e1, r1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
            _placeholder: !0
        };
    }
    function CVMaskElement(t1, e1) {
        this.data = t1, this.element = e1, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var r1, i1 = this.masksProperties.length, s1 = !1;
        for(r1 = 0; r1 < i1; r1++)"n" !== this.masksProperties[r1].mode && (s1 = !0), this.viewData[r1] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r1], 3);
        (this.hasMasks = s1) && this.element.addRenderableComponent(this);
    }
    function CVShapeElement(t1, e1, r1) {
        this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t1, e1, r1);
    }
    function CVSolidElement(t1, e1, r1) {
        this.initElement(t1, e1, r1);
    }
    function CVTextElement(t1, e1, r1) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this.initElement(t1, e1, r1);
    }
    function CVEffects() {}
    function HBaseElement(t1, e1, r1) {}
    function HSolidElement(t1, e1, r1) {
        this.initElement(t1, e1, r1);
    }
    function HCompElement(t1, e1, r1) {
        this.layers = t1.layers, this.supports3d = !t1.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t1, e1, r1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
            _placeholder: !0
        };
    }
    function HShapeElement(t1, e1, r1) {
        this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t1, e1, r1), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        };
    }
    function HTextElement(t1, e1, r1) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t1, e1, r1);
    }
    function HImageElement(t1, e1, r1) {
        this.assetData = e1.getAssetData(t1.refId), this.initElement(t1, e1, r1);
    }
    function HCameraElement(t1, e1, r1) {
        this.initFrame(), this.initBaseData(t1, e1, r1), this.initHierarchy();
        var i1 = PropertyFactory.getProp;
        if (this.pe = i1(this, t1.pe, 0, 0, this), t1.ks.p.s ? (this.px = i1(this, t1.ks.p.x, 1, 0, this), this.py = i1(this, t1.ks.p.y, 1, 0, this), this.pz = i1(this, t1.ks.p.z, 1, 0, this)) : this.p = i1(this, t1.ks.p, 1, 0, this), t1.ks.a && (this.a = i1(this, t1.ks.a, 1, 0, this)), t1.ks.or.k.length && t1.ks.or.k[0].to) {
            var s1, a1 = t1.ks.or.k.length;
            for(s1 = 0; s1 < a1; s1 += 1)t1.ks.or.k[s1].to = null, t1.ks.or.k[s1].ti = null;
        }
        this.or = i1(this, t1.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i1(this, t1.ks.rx, 0, degToRads, this), this.ry = i1(this, t1.ks.ry, 0, degToRads, this), this.rz = i1(this, t1.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
        };
    }
    function HEffects() {}
    function SliderEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
    }
    function AngleEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
    }
    function ColorEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, r1);
    }
    function PointEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, r1);
    }
    function LayerIndexEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
    }
    function MaskIndexEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
    }
    function CheckboxEffect(t1, e1, r1) {
        this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
    }
    function NoValueEffect() {
        this.p = {};
    }
    function EffectsManager() {}
    function EffectsManager(t1, e1) {
        var r1 = t1.ef || [];
        this.effectElements = [];
        var i1, s1, a1 = r1.length;
        for(i1 = 0; i1 < a1; i1++)s1 = new GroupEffect(r1[i1], e1), this.effectElements.push(s1);
    }
    function GroupEffect(t1, e1) {
        this.init(t1, e1);
    }
    function setLocationHref(t1) {
        locationHref = t1;
    }
    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
    }
    function setSubframeRendering(t1) {
        subframeEnabled = t1;
    }
    function loadAnimation(t1) {
        return !0 === standalone && (t1.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t1);
    }
    function setQuality(t1) {
        if ("string" == typeof t1) switch(t1){
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10;
        }
        else !isNaN(t1) && 1 < t1 && (defaultCurveSegments = t1);
        roundValues(!(50 <= defaultCurveSegments));
    }
    function inBrowser() {
        return "undefined" != typeof navigator;
    }
    function installPlugin(t1, e1) {
        "expressions" === t1 && (expressionsPlugin = e1);
    }
    function getFactory(t1) {
        switch(t1){
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
        }
    }
    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t1) {
        for(var e1 = queryString.split("&"), r1 = 0; r1 < e1.length; r1++){
            var i1 = e1[r1].split("=");
            if (decodeURIComponent(i1[0]) == t1) return decodeURIComponent(i1[1]);
        }
    }
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};
    !function() {
        var t1, e1 = [
            "abs",
            "acos",
            "acosh",
            "asin",
            "asinh",
            "atan",
            "atanh",
            "atan2",
            "ceil",
            "cbrt",
            "expm1",
            "clz32",
            "cos",
            "cosh",
            "exp",
            "floor",
            "fround",
            "hypot",
            "imul",
            "log",
            "log1p",
            "log2",
            "log10",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sign",
            "sin",
            "sinh",
            "sqrt",
            "tan",
            "tanh",
            "trunc",
            "E",
            "LN10",
            "LN2",
            "LOG10E",
            "LOG2E",
            "PI",
            "SQRT1_2",
            "SQRT2"
        ], r1 = e1.length;
        for(t1 = 0; t1 < r1; t1 += 1)BMMath[e1[t1]] = Math[e1[t1]];
    }(), BMMath.random = Math.random, BMMath.abs = function(t1) {
        if ("object" == typeof t1 && t1.length) {
            var e1, r1 = createSizedArray(t1.length), i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)r1[e1] = Math.abs(t1[e1]);
            return r1;
        }
        return Math.abs(t1);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
    roundValues(!1);
    var createElementID = (G = 0, function() {
        return "__lottie_element_" + ++G;
    }), G, rgbToHex = function() {
        var t1, e1, r1 = [];
        for(t1 = 0; t1 < 256; t1 += 1)e1 = t1.toString(16), r1[t1] = 1 == e1.length ? "0" + e1 : e1;
        return function(t1, e1, i1) {
            return t1 < 0 && (t1 = 0), e1 < 0 && (e1 = 0), i1 < 0 && (i1 = 0), "#" + r1[t1] + r1[e1] + r1[i1];
        };
    }();
    BaseEvent.prototype = {
        triggerEvent: function(t1, e1) {
            if (this._cbs[t1]) for(var r1 = this._cbs[t1].length, i1 = 0; i1 < r1; i1++)this._cbs[t1][i1](e1);
        },
        addEventListener: function(t1, e1) {
            return this._cbs[t1] || (this._cbs[t1] = []), this._cbs[t1].push(e1), (function() {
                this.removeEventListener(t1, e1);
            }).bind(this);
        },
        removeEventListener: function(t1, e1) {
            if (e1) {
                if (this._cbs[t1]) {
                    for(var r1 = 0, i1 = this._cbs[t1].length; r1 < i1;)this._cbs[t1][r1] === e1 && (this._cbs[t1].splice(r1, 1), r1 -= 1, i1 -= 1), r1 += 1;
                    this._cbs[t1].length || (this._cbs[t1] = null);
                }
            } else this._cbs[t1] = null;
        }
    };
    var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t1, e1) {
        return "float32" === t1 ? new Float32Array(e1) : "int16" === t1 ? new Int16Array(e1) : "uint8c" === t1 ? new Uint8ClampedArray(e1) : void 0;
    } : function(t1, e1) {
        var r1, i1 = 0, s1 = [];
        switch(t1){
            case "int16":
            case "uint8c":
                r1 = 1;
                break;
            default:
                r1 = 1.1;
        }
        for(i1 = 0; i1 < e1; i1 += 1)s1.push(r1);
        return s1;
    };
    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(t1) {
            -1 === this.dynamicProperties.indexOf(t1) && (this.dynamicProperties.push(t1), this.container.addDynamicProperty(this), this._isAnimated = !0);
        },
        iterateDynamicProperties: function() {
            this._mdf = !1;
            var t1, e1 = this.dynamicProperties.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue(), this.dynamicProperties[t1]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function(t1) {
            this.container = t1, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
        }
    };
    var getBlendMode = (Pa = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
    }, function(t1) {
        return Pa[t1] || "";
    }), Pa, Matrix = function() {
        function t1() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
        }
        function e1(t1) {
            if (0 === t1) return this;
            var e1 = M1(t1), r1 = D1(t1);
            return this._t(e1, -r1, 0, 0, r1, e1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function r1(t1) {
            if (0 === t1) return this;
            var e1 = M1(t1), r1 = D1(t1);
            return this._t(1, 0, 0, 0, 0, e1, -r1, 0, 0, r1, e1, 0, 0, 0, 0, 1);
        }
        function i1(t1) {
            if (0 === t1) return this;
            var e1 = M1(t1), r1 = D1(t1);
            return this._t(e1, 0, r1, 0, 0, 1, 0, 0, -r1, 0, e1, 0, 0, 0, 0, 1);
        }
        function s1(t1) {
            if (0 === t1) return this;
            var e1 = M1(t1), r1 = D1(t1);
            return this._t(e1, -r1, 0, 0, r1, e1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function a1(t1, e1) {
            return this._t(1, e1, t1, 1, 0, 0);
        }
        function n1(t1, e1) {
            return this.shear(w1(t1), w1(e1));
        }
        function o1(t1, e1) {
            var r1 = M1(e1), i1 = D1(e1);
            return this._t(r1, i1, 0, 0, -i1, r1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, w1(t1), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r1, -i1, 0, 0, i1, r1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function h1(t1, e1, r1) {
            return r1 || 0 === r1 || (r1 = 1), 1 === t1 && 1 === e1 && 1 === r1 ? this : this._t(t1, 0, 0, 0, 0, e1, 0, 0, 0, 0, r1, 0, 0, 0, 0, 1);
        }
        function l1(t1, e1, r1, i1, s1, a1, n1, o1, h1, l1, p1, f1, m1, c1, d1, u1) {
            return this.props[0] = t1, this.props[1] = e1, this.props[2] = r1, this.props[3] = i1, this.props[4] = s1, this.props[5] = a1, this.props[6] = n1, this.props[7] = o1, this.props[8] = h1, this.props[9] = l1, this.props[10] = p1, this.props[11] = f1, this.props[12] = m1, this.props[13] = c1, this.props[14] = d1, this.props[15] = u1, this;
        }
        function p1(t1, e1, r1) {
            return r1 = r1 || 0, 0 !== t1 || 0 !== e1 || 0 !== r1 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t1, e1, r1, 1) : this;
        }
        function f1(t1, e1, r1, i1, s1, a1, n1, o1, h1, l1, p1, f1, m1, c1, d1, u1) {
            var y1 = this.props;
            if (1 === t1 && 0 === e1 && 0 === r1 && 0 === i1 && 0 === s1 && 1 === a1 && 0 === n1 && 0 === o1 && 0 === h1 && 0 === l1 && 1 === p1 && 0 === f1) return y1[12] = y1[12] * t1 + y1[15] * m1, y1[13] = y1[13] * a1 + y1[15] * c1, y1[14] = y1[14] * p1 + y1[15] * d1, y1[15] = y1[15] * u1, this._identityCalculated = !1, this;
            var g1 = y1[0], v1 = y1[1], b1 = y1[2], E1 = y1[3], x1 = y1[4], P1 = y1[5], S1 = y1[6], _1 = y1[7], C1 = y1[8], A1 = y1[9], T1 = y1[10], k1 = y1[11], M1 = y1[12], D1 = y1[13], w1 = y1[14], F1 = y1[15];
            return y1[0] = g1 * t1 + v1 * s1 + b1 * h1 + E1 * m1, y1[1] = g1 * e1 + v1 * a1 + b1 * l1 + E1 * c1, y1[2] = g1 * r1 + v1 * n1 + b1 * p1 + E1 * d1, y1[3] = g1 * i1 + v1 * o1 + b1 * f1 + E1 * u1, y1[4] = x1 * t1 + P1 * s1 + S1 * h1 + _1 * m1, y1[5] = x1 * e1 + P1 * a1 + S1 * l1 + _1 * c1, y1[6] = x1 * r1 + P1 * n1 + S1 * p1 + _1 * d1, y1[7] = x1 * i1 + P1 * o1 + S1 * f1 + _1 * u1, y1[8] = C1 * t1 + A1 * s1 + T1 * h1 + k1 * m1, y1[9] = C1 * e1 + A1 * a1 + T1 * l1 + k1 * c1, y1[10] = C1 * r1 + A1 * n1 + T1 * p1 + k1 * d1, y1[11] = C1 * i1 + A1 * o1 + T1 * f1 + k1 * u1, y1[12] = M1 * t1 + D1 * s1 + w1 * h1 + F1 * m1, y1[13] = M1 * e1 + D1 * a1 + w1 * l1 + F1 * c1, y1[14] = M1 * r1 + D1 * n1 + w1 * p1 + F1 * d1, y1[15] = M1 * i1 + D1 * o1 + w1 * f1 + F1 * u1, this._identityCalculated = !1, this;
        }
        function m1() {
            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity;
        }
        function c1(t1) {
            for(var e1 = 0; e1 < 16;){
                if (t1.props[e1] !== this.props[e1]) return !1;
                e1 += 1;
            }
            return !0;
        }
        function d1(t1) {
            var e1;
            for(e1 = 0; e1 < 16; e1 += 1)t1.props[e1] = this.props[e1];
        }
        function u1(t1) {
            var e1;
            for(e1 = 0; e1 < 16; e1 += 1)this.props[e1] = t1[e1];
        }
        function y1(t1, e1, r1) {
            return {
                x: t1 * this.props[0] + e1 * this.props[4] + r1 * this.props[8] + this.props[12],
                y: t1 * this.props[1] + e1 * this.props[5] + r1 * this.props[9] + this.props[13],
                z: t1 * this.props[2] + e1 * this.props[6] + r1 * this.props[10] + this.props[14]
            };
        }
        function g1(t1, e1, r1) {
            return t1 * this.props[0] + e1 * this.props[4] + r1 * this.props[8] + this.props[12];
        }
        function v1(t1, e1, r1) {
            return t1 * this.props[1] + e1 * this.props[5] + r1 * this.props[9] + this.props[13];
        }
        function b1(t1, e1, r1) {
            return t1 * this.props[2] + e1 * this.props[6] + r1 * this.props[10] + this.props[14];
        }
        function E1() {
            var t1 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e1 = this.props[5] / t1, r1 = -this.props[1] / t1, i1 = -this.props[4] / t1, s1 = this.props[0] / t1, a1 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t1, n1 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t1, o1 = new Matrix;
            return o1.props[0] = e1, o1.props[1] = r1, o1.props[4] = i1, o1.props[5] = s1, o1.props[12] = a1, o1.props[13] = n1, o1;
        }
        function x1(t1) {
            return this.getInverseMatrix().applyToPointArray(t1[0], t1[1], t1[2] || 0);
        }
        function P1(t1) {
            var e1, r1 = t1.length, i1 = [];
            for(e1 = 0; e1 < r1; e1 += 1)i1[e1] = x1(t1[e1]);
            return i1;
        }
        function S1(t1, e1, r1) {
            var i1 = createTypedArray("float32", 6);
            if (this.isIdentity()) i1[0] = t1[0], i1[1] = t1[1], i1[2] = e1[0], i1[3] = e1[1], i1[4] = r1[0], i1[5] = r1[1];
            else {
                var s1 = this.props[0], a1 = this.props[1], n1 = this.props[4], o1 = this.props[5], h1 = this.props[12], l1 = this.props[13];
                i1[0] = t1[0] * s1 + t1[1] * n1 + h1, i1[1] = t1[0] * a1 + t1[1] * o1 + l1, i1[2] = e1[0] * s1 + e1[1] * n1 + h1, i1[3] = e1[0] * a1 + e1[1] * o1 + l1, i1[4] = r1[0] * s1 + r1[1] * n1 + h1, i1[5] = r1[0] * a1 + r1[1] * o1 + l1;
            }
            return i1;
        }
        function _1(t1, e1, r1) {
            return this.isIdentity() ? [
                t1,
                e1,
                r1
            ] : [
                t1 * this.props[0] + e1 * this.props[4] + r1 * this.props[8] + this.props[12],
                t1 * this.props[1] + e1 * this.props[5] + r1 * this.props[9] + this.props[13],
                t1 * this.props[2] + e1 * this.props[6] + r1 * this.props[10] + this.props[14]
            ];
        }
        function C1(t1, e1) {
            if (this.isIdentity()) return t1 + "," + e1;
            var r1 = this.props;
            return Math.round(100 * (t1 * r1[0] + e1 * r1[4] + r1[12])) / 100 + "," + Math.round(100 * (t1 * r1[1] + e1 * r1[5] + r1[13])) / 100;
        }
        function A1() {
            for(var t1 = 0, e1 = this.props, r1 = "matrix3d("; t1 < 16;)r1 += F1(1e4 * e1[t1]) / 1e4, r1 += 15 === t1 ? ")" : ",", t1 += 1;
            return r1;
        }
        function T1(t1) {
            return t1 < 1e-6 && 0 < t1 || -0.000001 < t1 && t1 < 0 ? F1(1e4 * t1) / 1e4 : t1;
        }
        function k1() {
            var t1 = this.props;
            return "matrix(" + T1(t1[0]) + "," + T1(t1[1]) + "," + T1(t1[4]) + "," + T1(t1[5]) + "," + T1(t1[12]) + "," + T1(t1[13]) + ")";
        }
        var M1 = Math.cos, D1 = Math.sin, w1 = Math.tan, F1 = Math.round;
        return function() {
            this.reset = t1, this.rotate = e1, this.rotateX = r1, this.rotateY = i1, this.rotateZ = s1, this.skew = n1, this.skewFromAxis = o1, this.shear = a1, this.scale = h1, this.setTransform = l1, this.translate = p1, this.transform = f1, this.applyToPoint = y1, this.applyToX = g1, this.applyToY = v1, this.applyToZ = b1, this.applyToPointArray = _1, this.applyToTriplePoints = S1, this.applyToPointStringified = C1, this.toCSS = A1, this.to2dCSS = k1, this.clone = d1, this.cloneFromProps = u1, this.equals = c1, this.inversePoints = P1, this.inversePoint = x1, this.getInverseMatrix = E1, this._t = this.transform, this.isIdentity = m1, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
        };
    }();
    !function(t1, e1) {
        function r1(t1) {
            var e1, r1 = t1.length, i1 = this, s1 = 0, a1 = i1.i = i1.j = 0, n1 = i1.S = [];
            for(r1 || (t1 = [
                r1++
            ]); s1 < h1;)n1[s1] = s1++;
            for(s1 = 0; s1 < h1; s1++)n1[s1] = n1[a1 = d1 & a1 + t1[s1 % r1] + (e1 = n1[s1])], n1[a1] = e1;
            i1.g = function(t1) {
                for(var e1, r1 = 0, s1 = i1.i, a1 = i1.j, n1 = i1.S; t1--;)e1 = n1[s1 = d1 & s1 + 1], r1 = r1 * h1 + n1[d1 & (n1[s1] = n1[a1 = d1 & a1 + e1]) + (n1[a1] = e1)];
                return i1.i = s1, i1.j = a1, r1;
            };
        }
        function i1(t1, e1) {
            return e1.i = t1.i, e1.j = t1.j, e1.S = t1.S.slice(), e1;
        }
        function s1(t1, e1) {
            for(var r1, i1 = t1 + "", s1 = 0; s1 < i1.length;)e1[d1 & s1] = d1 & (r1 ^= 19 * e1[d1 & s1]) + i1.charCodeAt(s1++);
            return a1(e1);
        }
        function a1(t1) {
            return String.fromCharCode.apply(0, t1);
        }
        var n1, o1 = this, h1 = 256, l1 = 6, p1 = "random", f1 = e1.pow(h1, l1), m1 = e1.pow(2, 52), c1 = 2 * m1, d1 = h1 - 1;
        e1["seed" + p1] = function(d1, u1, y1) {
            var g1 = [], v1 = s1(function t1(e1, r1) {
                var i1, s1 = [], a1 = typeof e1;
                if (r1 && "object" == a1) for(i1 in e1)try {
                    s1.push(t1(e1[i1], r1 - 1));
                } catch (t1) {}
                return s1.length ? s1 : "string" == a1 ? e1 : e1 + "\x00";
            }((u1 = !0 === u1 ? {
                entropy: !0
            } : u1 || {}).entropy ? [
                d1,
                a1(t1)
            ] : null === d1 ? function() {
                try {
                    if (n1) return a1(n1.randomBytes(h1));
                    var e1 = new Uint8Array(h1);
                    return (o1.crypto || o1.msCrypto).getRandomValues(e1), a1(e1);
                } catch (e1) {
                    var r1 = o1.navigator, i1 = r1 && r1.plugins;
                    return [
                        +new Date,
                        o1,
                        i1,
                        o1.screen,
                        a1(t1)
                    ];
                }
            }() : d1, 3), g1), b1 = new r1(g1), E1 = function() {
                for(var t1 = b1.g(l1), e1 = f1, r1 = 0; t1 < m1;)t1 = (t1 + r1) * h1, e1 *= h1, r1 = b1.g(1);
                for(; c1 <= t1;)t1 /= 2, e1 /= 2, r1 >>>= 1;
                return (t1 + r1) / e1;
            };
            return E1.int32 = function() {
                return 0 | b1.g(4);
            }, E1.quick = function() {
                return b1.g(4) / 4294967296;
            }, E1.double = E1, s1(a1(b1.S), t1), (u1.pass || y1 || function(t1, r1, s1, a1) {
                return a1 && (a1.S && i1(a1, b1), t1.state = function() {
                    return i1(b1, {});
                }), s1 ? (e1[p1] = t1, r1) : t1;
            })(E1, v1, "global" in u1 ? u1.global : this == e1, u1.state);
        }, s1(e1.random(), t1);
    }([], BMMath);
    var BezierFactory = function() {
        function t1(t1, e1) {
            return 1 - 3 * e1 + 3 * t1;
        }
        function e1(t1, e1) {
            return 3 * e1 - 6 * t1;
        }
        function r1(t1) {
            return 3 * t1;
        }
        function i1(i1, s1, a1) {
            return ((t1(s1, a1) * i1 + e1(s1, a1)) * i1 + r1(s1)) * i1;
        }
        function s1(i1, s1, a1) {
            return 3 * t1(s1, a1) * i1 * i1 + 2 * e1(s1, a1) * i1 + r1(s1);
        }
        function a1(t1) {
            this._p = t1, this._mSampleValues = p1 ? new Float32Array(h1) : new Array(h1), this._precomputed = !1, this.get = this.get.bind(this);
        }
        var n1 = {
            getBezierEasing: function(t1, e1, r1, i1, s1) {
                var n1 = s1 || ("bez_" + t1 + "_" + e1 + "_" + r1 + "_" + i1).replace(/\./g, "p");
                if (o1[n1]) return o1[n1];
                var h1 = new a1([
                    t1,
                    e1,
                    r1,
                    i1
                ]);
                return o1[n1] = h1;
            }
        }, o1 = {}, h1 = 11, l1 = 1 / (h1 - 1), p1 = "function" == typeof Float32Array;
        return a1.prototype = {
            get: function(t1) {
                var e1 = this._p[0], r1 = this._p[1], s1 = this._p[2], a1 = this._p[3];
                return this._precomputed || this._precompute(), e1 === r1 && s1 === a1 ? t1 : 0 === t1 ? 0 : 1 === t1 ? 1 : i1(this._getTForX(t1), r1, a1);
            },
            _precompute: function() {
                var t1 = this._p[0], e1 = this._p[1], r1 = this._p[2], i1 = this._p[3];
                this._precomputed = !0, t1 === e1 && r1 === i1 || this._calcSampleValues();
            },
            _calcSampleValues: function() {
                for(var t1 = this._p[0], e1 = this._p[2], r1 = 0; r1 < h1; ++r1)this._mSampleValues[r1] = i1(r1 * l1, t1, e1);
            },
            _getTForX: function(t1) {
                for(var e1 = this._p[0], r1 = this._p[2], a1 = this._mSampleValues, n1 = 0, o1 = 1, p1 = h1 - 1; o1 !== p1 && a1[o1] <= t1; ++o1)n1 += l1;
                var f1 = n1 + (t1 - a1[--o1]) / (a1[o1 + 1] - a1[o1]) * l1, m1 = s1(f1, e1, r1);
                return .001 <= m1 ? function(t1, e1, r1, a1) {
                    for(var n1 = 0; n1 < 4; ++n1){
                        var o1 = s1(e1, r1, a1);
                        if (0 === o1) return e1;
                        e1 -= (i1(e1, r1, a1) - t1) / o1;
                    }
                    return e1;
                }(t1, f1, e1, r1) : 0 === m1 ? f1 : function(t1, e1, r1, s1, a1) {
                    for(var n1, o1, h1 = 0; 0 < (n1 = i1(o1 = e1 + (r1 - e1) / 2, s1, a1) - t1) ? r1 = o1 : e1 = o1, 1e-7 < Math.abs(n1) && ++h1 < 10;);
                    return o1;
                }(t1, n1, n1 + l1, e1, r1);
            }
        }, n1;
    }();
    !function() {
        for(var t1 = 0, e1 = [
            "ms",
            "moz",
            "webkit",
            "o"
        ], r1 = 0; r1 < e1.length && !window.requestAnimationFrame; ++r1)window.requestAnimationFrame = window[e1[r1] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e1[r1] + "CancelAnimationFrame"] || window[e1[r1] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e1, r1) {
            var i1 = (new Date).getTime(), s1 = Math.max(0, 16 - (i1 - t1)), a1 = setTimeout(function() {
                e1(i1 + s1);
            }, s1);
            return t1 = i1 + s1, a1;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t1) {
            clearTimeout(t1);
        });
    }();
    var bez = bezFunction(), dataManager = dataFunctionManager(), FontManager = function() {
        function t1(t1, e1) {
            var r1 = createTag("span");
            r1.style.fontFamily = e1;
            var i1 = createTag("span");
            i1.innerHTML = "giItT1WQy@!-/#", r1.style.position = "absolute", r1.style.left = "-10000px", r1.style.top = "-10000px", r1.style.fontSize = "300px", r1.style.fontVariant = "normal", r1.style.fontStyle = "normal", r1.style.fontWeight = "normal", r1.style.letterSpacing = "0", r1.appendChild(i1), document.body.appendChild(r1);
            var s1 = i1.offsetWidth;
            return i1.style.fontFamily = function(t1) {
                var e1, r1 = t1.split(","), i1 = r1.length, s1 = [];
                for(e1 = 0; e1 < i1; e1 += 1)"sans-serif" !== r1[e1] && "monospace" !== r1[e1] && s1.push(r1[e1]);
                return s1.join(",");
            }(t1) + ", " + e1, {
                node: i1,
                w: s1,
                parent: r1
            };
        }
        var e1 = {
            w: 0,
            size: 0,
            shapes: []
        }, r1 = [];
        r1 = r1.concat([
            2304,
            2305,
            2306,
            2307,
            2362,
            2363,
            2364,
            2364,
            2366,
            2367,
            2368,
            2369,
            2370,
            2371,
            2372,
            2373,
            2374,
            2375,
            2376,
            2377,
            2378,
            2379,
            2380,
            2381,
            2382,
            2383,
            2387,
            2388,
            2389,
            2390,
            2391,
            2402,
            2403
        ]);
        var i1 = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
        };
        return i1.getCombinedCharacterCodes = function() {
            return r1;
        }, i1.prototype = {
            addChars: function(t1) {
                if (t1) {
                    this.chars || (this.chars = []);
                    var e1, r1, i1, s1 = t1.length, a1 = this.chars.length;
                    for(e1 = 0; e1 < s1; e1 += 1){
                        for(r1 = 0, i1 = !1; r1 < a1;)this.chars[r1].style === t1[e1].style && this.chars[r1].fFamily === t1[e1].fFamily && this.chars[r1].ch === t1[e1].ch && (i1 = !0), r1 += 1;
                        i1 || (this.chars.push(t1[e1]), a1 += 1);
                    }
                }
            },
            addFonts: function(e1, r1) {
                if (e1) {
                    if (this.chars) return this.isLoaded = !0, void (this.fonts = e1.list);
                    var i1, s1, a1, n1, o1 = e1.list, h1 = o1.length, l1 = h1;
                    for(i1 = 0; i1 < h1; i1 += 1){
                        var p1, f1, m1 = !0;
                        if (o1[i1].loaded = !1, o1[i1].monoCase = t1(o1[i1].fFamily, "monospace"), o1[i1].sansCase = t1(o1[i1].fFamily, "sans-serif"), o1[i1].fPath) {
                            if ("p" === o1[i1].fOrigin || 3 === o1[i1].origin) {
                                if (0 < (p1 = document.querySelectorAll('style[f-forigin="p"][f-family="' + o1[i1].fFamily + '"], style[f-origin="3"][f-family="' + o1[i1].fFamily + '"]')).length && (m1 = !1), m1) {
                                    var c1 = createTag("style");
                                    c1.setAttribute("f-forigin", o1[i1].fOrigin), c1.setAttribute("f-origin", o1[i1].origin), c1.setAttribute("f-family", o1[i1].fFamily), c1.type = "text/css", c1.innerHTML = "@font-face {font-family: " + o1[i1].fFamily + "; font-style: normal; src: url('" + o1[i1].fPath + "');}", r1.appendChild(c1);
                                }
                            } else if ("g" === o1[i1].fOrigin || 1 === o1[i1].origin) {
                                for(p1 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), f1 = 0; f1 < p1.length; f1++)-1 !== p1[f1].href.indexOf(o1[i1].fPath) && (m1 = !1);
                                if (m1) {
                                    var d1 = createTag("link");
                                    d1.setAttribute("f-forigin", o1[i1].fOrigin), d1.setAttribute("f-origin", o1[i1].origin), d1.type = "text/css", d1.rel = "stylesheet", d1.href = o1[i1].fPath, document.body.appendChild(d1);
                                }
                            } else if ("t" === o1[i1].fOrigin || 2 === o1[i1].origin) {
                                for(p1 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), f1 = 0; f1 < p1.length; f1++)o1[i1].fPath === p1[f1].src && (m1 = !1);
                                if (m1) {
                                    var u1 = createTag("link");
                                    u1.setAttribute("f-forigin", o1[i1].fOrigin), u1.setAttribute("f-origin", o1[i1].origin), u1.setAttribute("rel", "stylesheet"), u1.setAttribute("href", o1[i1].fPath), r1.appendChild(u1);
                                }
                            }
                        } else o1[i1].loaded = !0, l1 -= 1;
                        o1[i1].helper = (s1 = r1, a1 = o1[i1], n1 = void 0, (n1 = createNS("text")).style.fontSize = "100px", n1.setAttribute("font-family", a1.fFamily), n1.setAttribute("font-style", a1.fStyle), n1.setAttribute("font-weight", a1.fWeight), n1.textContent = "1", a1.fClass ? (n1.style.fontFamily = "inherit", n1.setAttribute("class", a1.fClass)) : n1.style.fontFamily = a1.fFamily, s1.appendChild(n1), createTag("canvas").getContext("2d").font = a1.fWeight + " " + a1.fStyle + " 100px " + a1.fFamily, n1), o1[i1].cache = {}, this.fonts.push(o1[i1]);
                    }
                    0 === l1 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                } else this.isLoaded = !0;
            },
            getCharData: function(t1, r1, i1) {
                for(var s1 = 0, a1 = this.chars.length; s1 < a1;){
                    if (this.chars[s1].ch === t1 && this.chars[s1].style === r1 && this.chars[s1].fFamily === i1) return this.chars[s1];
                    s1 += 1;
                }
                return ("string" == typeof t1 && 13 !== t1.charCodeAt(0) || !t1) && console && console.warn && console.warn("Missing character from exported characters list: ", t1, r1, i1), e1;
            },
            getFontByName: function(t1) {
                for(var e1 = 0, r1 = this.fonts.length; e1 < r1;){
                    if (this.fonts[e1].fName === t1) return this.fonts[e1];
                    e1 += 1;
                }
                return this.fonts[0];
            },
            measureText: function(t1, e1, r1) {
                var i1 = this.getFontByName(e1), s1 = t1.charCodeAt(0);
                if (!i1.cache[s1 + 1]) {
                    var a1 = i1.helper;
                    if (" " === t1) {
                        a1.textContent = "|" + t1 + "|";
                        var n1 = a1.getComputedTextLength();
                        a1.textContent = "||";
                        var o1 = a1.getComputedTextLength();
                        i1.cache[s1 + 1] = (n1 - o1) / 100;
                    } else a1.textContent = t1, i1.cache[s1 + 1] = a1.getComputedTextLength() / 100;
                }
                return i1.cache[s1 + 1] * r1;
            },
            checkLoadedFonts: function() {
                var t1, e1, r1, i1 = this.fonts.length, s1 = i1;
                for(t1 = 0; t1 < i1; t1 += 1)this.fonts[t1].loaded ? s1 -= 1 : "n" === this.fonts[t1].fOrigin || 0 === this.fonts[t1].origin ? this.fonts[t1].loaded = !0 : (e1 = this.fonts[t1].monoCase.node, r1 = this.fonts[t1].monoCase.w, e1.offsetWidth !== r1 ? (s1 -= 1, this.fonts[t1].loaded = !0) : (e1 = this.fonts[t1].sansCase.node, r1 = this.fonts[t1].sansCase.w, e1.offsetWidth !== r1 && (s1 -= 1, this.fonts[t1].loaded = !0)), this.fonts[t1].loaded && (this.fonts[t1].sansCase.parent.parentNode.removeChild(this.fonts[t1].sansCase.parent), this.fonts[t1].monoCase.parent.parentNode.removeChild(this.fonts[t1].monoCase.parent)));
                0 !== s1 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            },
            setIsLoaded: function() {
                this.isLoaded = !0;
            }
        }, i1;
    }(), PropertyFactory = function() {
        function t1(t1, r1) {
            var i1, s1 = this.offsetTime;
            "multidimensional" === this.propType && (i1 = createTypedArray("float32", this.pv.length));
            for(var a1, n1, o1, h1, l1, p1, f1, m1, c1 = r1.lastIndex, d1 = c1, u1 = this.keyframes.length - 1, y1 = !0; y1;){
                if (a1 = this.keyframes[d1], n1 = this.keyframes[d1 + 1], d1 === u1 - 1 && t1 >= n1.t - s1) {
                    a1.h && (a1 = n1), c1 = 0;
                    break;
                }
                if (n1.t - s1 > t1) {
                    c1 = d1;
                    break;
                }
                d1 < u1 - 1 ? d1 += 1 : (c1 = 0, y1 = !1);
            }
            var g1, v1, b1, E1, x1, P1, S1, _1, C1, A1, T1 = n1.t - s1, k1 = a1.t - s1;
            if (a1.to) {
                a1.bezierData || (a1.bezierData = bez.buildBezierData(a1.s, n1.s || a1.e, a1.to, a1.ti));
                var M1 = a1.bezierData;
                if (T1 <= t1 || t1 < k1) {
                    var D1 = T1 <= t1 ? M1.points.length - 1 : 0;
                    for(h1 = M1.points[D1].point.length, o1 = 0; o1 < h1; o1 += 1)i1[o1] = M1.points[D1].point[o1];
                } else {
                    a1.__fnct ? m1 = a1.__fnct : (m1 = BezierFactory.getBezierEasing(a1.o.x, a1.o.y, a1.i.x, a1.i.y, a1.n).get, a1.__fnct = m1), l1 = m1((t1 - k1) / (T1 - k1));
                    var w1, F1 = M1.segmentLength * l1, I1 = r1.lastFrame < t1 && r1._lastKeyframeIndex === d1 ? r1._lastAddedLength : 0;
                    for(f1 = r1.lastFrame < t1 && r1._lastKeyframeIndex === d1 ? r1._lastPoint : 0, y1 = !0, p1 = M1.points.length; y1;){
                        if (I1 += M1.points[f1].partialLength, 0 === F1 || 0 === l1 || f1 === M1.points.length - 1) {
                            for(h1 = M1.points[f1].point.length, o1 = 0; o1 < h1; o1 += 1)i1[o1] = M1.points[f1].point[o1];
                            break;
                        }
                        if (I1 <= F1 && F1 < I1 + M1.points[f1 + 1].partialLength) {
                            for(w1 = (F1 - I1) / M1.points[f1 + 1].partialLength, h1 = M1.points[f1].point.length, o1 = 0; o1 < h1; o1 += 1)i1[o1] = M1.points[f1].point[o1] + (M1.points[f1 + 1].point[o1] - M1.points[f1].point[o1]) * w1;
                            break;
                        }
                        f1 < p1 - 1 ? f1 += 1 : y1 = !1;
                    }
                    r1._lastPoint = f1, r1._lastAddedLength = I1 - M1.points[f1].partialLength, r1._lastKeyframeIndex = d1;
                }
            } else {
                var V1, B1, R1, L1, G1;
                if (u1 = a1.s.length, g1 = n1.s || a1.e, this.sh && 1 !== a1.h) {
                    if (T1 <= t1) i1[0] = g1[0], i1[1] = g1[1], i1[2] = g1[2];
                    else if (t1 <= k1) i1[0] = a1.s[0], i1[1] = a1.s[1], i1[2] = a1.s[2];
                    else {
                        var z1 = e1(a1.s), N1 = e1(g1);
                        v1 = i1, b1 = function(t1, e1, r1) {
                            var i1, s1, a1, n1, o1, h1 = [], l1 = t1[0], p1 = t1[1], f1 = t1[2], m1 = t1[3], c1 = e1[0], d1 = e1[1], u1 = e1[2], y1 = e1[3];
                            return (s1 = l1 * c1 + p1 * d1 + f1 * u1 + m1 * y1) < 0 && (s1 = -s1, c1 = -c1, d1 = -d1, u1 = -u1, y1 = -y1), o1 = 1e-6 < 1 - s1 ? (i1 = Math.acos(s1), a1 = Math.sin(i1), n1 = Math.sin((1 - r1) * i1) / a1, Math.sin(r1 * i1) / a1) : (n1 = 1 - r1, r1), h1[0] = n1 * l1 + o1 * c1, h1[1] = n1 * p1 + o1 * d1, h1[2] = n1 * f1 + o1 * u1, h1[3] = n1 * m1 + o1 * y1, h1;
                        }(z1, N1, (t1 - k1) / (T1 - k1)), E1 = b1[0], x1 = b1[1], P1 = b1[2], S1 = b1[3], _1 = Math.atan2(2 * x1 * S1 - 2 * E1 * P1, 1 - 2 * x1 * x1 - 2 * P1 * P1), C1 = Math.asin(2 * E1 * x1 + 2 * P1 * S1), A1 = Math.atan2(2 * E1 * S1 - 2 * x1 * P1, 1 - 2 * E1 * E1 - 2 * P1 * P1), v1[0] = _1 / degToRads, v1[1] = C1 / degToRads, v1[2] = A1 / degToRads;
                    }
                } else for(d1 = 0; d1 < u1; d1 += 1)1 !== a1.h && (l1 = T1 <= t1 ? 1 : t1 < k1 ? 0 : (a1.o.x.constructor === Array ? (a1.__fnct || (a1.__fnct = []), a1.__fnct[d1] ? m1 = a1.__fnct[d1] : (V1 = void 0 === a1.o.x[d1] ? a1.o.x[0] : a1.o.x[d1], B1 = void 0 === a1.o.y[d1] ? a1.o.y[0] : a1.o.y[d1], R1 = void 0 === a1.i.x[d1] ? a1.i.x[0] : a1.i.x[d1], L1 = void 0 === a1.i.y[d1] ? a1.i.y[0] : a1.i.y[d1], m1 = BezierFactory.getBezierEasing(V1, B1, R1, L1).get, a1.__fnct[d1] = m1)) : a1.__fnct ? m1 = a1.__fnct : (V1 = a1.o.x, B1 = a1.o.y, R1 = a1.i.x, L1 = a1.i.y, m1 = BezierFactory.getBezierEasing(V1, B1, R1, L1).get, a1.__fnct = m1), m1((t1 - k1) / (T1 - k1)))), g1 = n1.s || a1.e, G1 = 1 === a1.h ? a1.s[d1] : a1.s[d1] + (g1[d1] - a1.s[d1]) * l1, "multidimensional" === this.propType ? i1[d1] = G1 : i1 = G1;
            }
            return r1.lastIndex = c1, i1;
        }
        function e1(t1) {
            var e1 = t1[0] * degToRads, r1 = t1[1] * degToRads, i1 = t1[2] * degToRads, s1 = Math.cos(e1 / 2), a1 = Math.cos(r1 / 2), n1 = Math.cos(i1 / 2), o1 = Math.sin(e1 / 2), h1 = Math.sin(r1 / 2), l1 = Math.sin(i1 / 2);
            return [
                o1 * h1 * n1 + s1 * a1 * l1,
                o1 * a1 * n1 + s1 * h1 * l1,
                s1 * h1 * n1 - o1 * a1 * l1,
                s1 * a1 * n1 - o1 * h1 * l1
            ];
        }
        function r1() {
            var t1 = this.comp.renderedFrame - this.offsetTime, e1 = this.keyframes[0].t - this.offsetTime, r1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t1 === this._caching.lastFrame || this._caching.lastFrame !== p1 && (this._caching.lastFrame >= r1 && r1 <= t1 || this._caching.lastFrame < e1 && t1 < e1))) {
                this._caching.lastFrame >= t1 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i1 = this.interpolateValue(t1, this._caching);
                this.pv = i1;
            }
            return this._caching.lastFrame = t1, this.pv;
        }
        function i1(t1) {
            var e1;
            if ("unidimensional" === this.propType) e1 = t1 * this.mult, 1e-5 < f1(this.v - e1) && (this.v = e1, this._mdf = !0);
            else for(var r1 = 0, i1 = this.v.length; r1 < i1;)e1 = t1[r1] * this.mult, 1e-5 < f1(this.v[r1] - e1) && (this.v[r1] = e1, this._mdf = !0), r1 += 1;
        }
        function s1() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                if (this.lock) this.setVValue(this.pv);
                else {
                    this.lock = !0, this._mdf = this._isFirstFrame;
                    var t1, e1 = this.effectsSequence.length, r1 = this.kf ? this.pv : this.data.k;
                    for(t1 = 0; t1 < e1; t1 += 1)r1 = this.effectsSequence[t1](r1);
                    this.setVValue(r1), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
        }
        function a1(t1) {
            this.effectsSequence.push(t1), this.container.addDynamicProperty(this);
        }
        function n1(t1, e1, r1, n1) {
            this.propType = "unidimensional", this.mult = r1 || 1, this.data = e1, this.v = r1 ? e1.k * r1 : e1.k, this.pv = e1.k, this._mdf = !1, this.elem = t1, this.container = n1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s1, this.setVValue = i1, this.addEffect = a1;
        }
        function o1(t1, e1, r1, n1) {
            this.propType = "multidimensional", this.mult = r1 || 1, this.data = e1, this._mdf = !1, this.elem = t1, this.container = n1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var o1, h1 = e1.k.length;
            for(this.v = createTypedArray("float32", h1), this.pv = createTypedArray("float32", h1), createTypedArray("float32", h1), this.vel = createTypedArray("float32", h1), o1 = 0; o1 < h1; o1 += 1)this.v[o1] = e1.k[o1] * this.mult, this.pv[o1] = e1.k[o1];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s1, this.setVValue = i1, this.addEffect = a1;
        }
        function h1(e1, n1, o1, h1) {
            this.propType = "unidimensional", this.keyframes = n1.k, this.offsetTime = e1.data.st, this.frameId = -1, this._caching = {
                lastFrame: p1,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = n1, this.mult = o1 || 1, this.elem = e1, this.container = h1, this.comp = e1.comp, this.v = p1, this.pv = p1, this._isFirstFrame = !0, this.getValue = s1, this.setVValue = i1, this.interpolateValue = t1, this.effectsSequence = [
                r1.bind(this)
            ], this.addEffect = a1;
        }
        function l1(e1, n1, o1, h1) {
            this.propType = "multidimensional";
            var l1, f1, m1, c1, d1, u1 = n1.k.length;
            for(l1 = 0; l1 < u1 - 1; l1 += 1)n1.k[l1].to && n1.k[l1].s && n1.k[l1 + 1] && n1.k[l1 + 1].s && (f1 = n1.k[l1].s, m1 = n1.k[l1 + 1].s, c1 = n1.k[l1].to, d1 = n1.k[l1].ti, (2 === f1.length && (f1[0] !== m1[0] || f1[1] !== m1[1]) && bez.pointOnLine2D(f1[0], f1[1], m1[0], m1[1], f1[0] + c1[0], f1[1] + c1[1]) && bez.pointOnLine2D(f1[0], f1[1], m1[0], m1[1], m1[0] + d1[0], m1[1] + d1[1]) || 3 === f1.length && (f1[0] !== m1[0] || f1[1] !== m1[1] || f1[2] !== m1[2]) && bez.pointOnLine3D(f1[0], f1[1], f1[2], m1[0], m1[1], m1[2], f1[0] + c1[0], f1[1] + c1[1], f1[2] + c1[2]) && bez.pointOnLine3D(f1[0], f1[1], f1[2], m1[0], m1[1], m1[2], m1[0] + d1[0], m1[1] + d1[1], m1[2] + d1[2])) && (n1.k[l1].to = null, n1.k[l1].ti = null), f1[0] === m1[0] && f1[1] === m1[1] && 0 === c1[0] && 0 === c1[1] && 0 === d1[0] && 0 === d1[1] && (2 === f1.length || f1[2] === m1[2] && 0 === c1[2] && 0 === d1[2]) && (n1.k[l1].to = null, n1.k[l1].ti = null));
            this.effectsSequence = [
                r1.bind(this)
            ], this.keyframes = n1.k, this.offsetTime = e1.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = o1 || 1, this.elem = e1, this.container = h1, this.comp = e1.comp, this.getValue = s1, this.setVValue = i1, this.interpolateValue = t1, this.frameId = -1;
            var y1 = n1.k[0].s.length;
            for(this.v = createTypedArray("float32", y1), this.pv = createTypedArray("float32", y1), l1 = 0; l1 < y1; l1 += 1)this.v[l1] = p1, this.pv[l1] = p1;
            this._caching = {
                lastFrame: p1,
                lastIndex: 0,
                value: createTypedArray("float32", y1)
            }, this.addEffect = a1;
        }
        var p1 = initialDefaultFrame, f1 = Math.abs;
        return {
            getProp: function(t1, e1, r1, i1, s1) {
                var a1;
                if (e1.k.length) {
                    if ("number" == typeof e1.k[0]) a1 = new o1(t1, e1, i1, s1);
                    else switch(r1){
                        case 0:
                            a1 = new h1(t1, e1, i1, s1);
                            break;
                        case 1:
                            a1 = new l1(t1, e1, i1, s1);
                    }
                } else a1 = new n1(t1, e1, i1, s1);
                return a1.effectsSequence.length && s1.addDynamicProperty(a1), a1;
            }
        };
    }(), TransformPropertyFactory = function() {
        function t1(t1, e1, r1) {
            if (this.elem = t1, this.frameId = -1, this.propType = "transform", this.data = e1, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r1 || t1), e1.p && e1.p.s ? (this.px = PropertyFactory.getProp(t1, e1.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t1, e1.p.y, 0, 0, this), e1.p.z && (this.pz = PropertyFactory.getProp(t1, e1.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t1, e1.p || {
                k: [
                    0,
                    0,
                    0
                ]
            }, 1, 0, this), e1.rx) {
                if (this.rx = PropertyFactory.getProp(t1, e1.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t1, e1.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t1, e1.rz, 0, degToRads, this), e1.or.k[0].ti) {
                    var i1, s1 = e1.or.k.length;
                    for(i1 = 0; i1 < s1; i1 += 1)e1.or.k[i1].to = e1.or.k[i1].ti = null;
                }
                this.or = PropertyFactory.getProp(t1, e1.or, 1, degToRads, this), this.or.sh = !0;
            } else this.r = PropertyFactory.getProp(t1, e1.r || {
                k: 0
            }, 0, degToRads, this);
            e1.sk && (this.sk = PropertyFactory.getProp(t1, e1.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t1, e1.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t1, e1.a || {
                k: [
                    0,
                    0,
                    0
                ]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t1, e1.s || {
                k: [
                    100,
                    100,
                    100
                ]
            }, 1, .01, this), e1.o ? this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, t1) : this.o = {
                _mdf: !1,
                v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
        }
        var e1 = [
            0,
            0
        ];
        return t1.prototype = {
            applyToMatrix: function(t1) {
                var e1 = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || e1, this.a && t1.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t1.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t1.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t1.rotate(-this.r.v) : t1.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t1.translate(this.px.v, this.py.v, -this.pz.v) : t1.translate(this.px.v, this.py.v, 0) : t1.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            },
            getValue: function(t1) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t1) {
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var r1, i1, s1 = this.elem.globalData.frameRate;
                            if (this.p && this.p.keyframes && this.p.getValueAtTime) i1 = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r1 = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / s1, 0), this.p.getValueAtTime(this.p.keyframes[0].t / s1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / s1, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / s1, 0)) : (r1 = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / s1, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                r1 = [], i1 = [];
                                var a1 = this.px, n1 = this.py;
                                a1._caching.lastFrame + a1.offsetTime <= a1.keyframes[0].t ? (r1[0] = a1.getValueAtTime((a1.keyframes[0].t + .01) / s1, 0), r1[1] = n1.getValueAtTime((n1.keyframes[0].t + .01) / s1, 0), i1[0] = a1.getValueAtTime(a1.keyframes[0].t / s1, 0), i1[1] = n1.getValueAtTime(n1.keyframes[0].t / s1, 0)) : a1._caching.lastFrame + a1.offsetTime >= a1.keyframes[a1.keyframes.length - 1].t ? (r1[0] = a1.getValueAtTime(a1.keyframes[a1.keyframes.length - 1].t / s1, 0), r1[1] = n1.getValueAtTime(n1.keyframes[n1.keyframes.length - 1].t / s1, 0), i1[0] = a1.getValueAtTime((a1.keyframes[a1.keyframes.length - 1].t - .01) / s1, 0), i1[1] = n1.getValueAtTime((n1.keyframes[n1.keyframes.length - 1].t - .01) / s1, 0)) : (r1 = [
                                    a1.pv,
                                    n1.pv
                                ], i1[0] = a1.getValueAtTime((a1._caching.lastFrame + a1.offsetTime - .01) / s1, a1.offsetTime), i1[1] = n1.getValueAtTime((n1._caching.lastFrame + n1.offsetTime - .01) / s1, n1.offsetTime));
                            } else r1 = i1 = e1;
                            this.v.rotate(-Math.atan2(r1[1] - i1[1], r1[0] - i1[0]));
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            },
            precalculateMatrix: function() {
                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    }
                    if (this.r) {
                        if (this.r.effectsSequence.length) return;
                        this.pre.rotate(-this.r.v), this.appliedTransformations = 4;
                    } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                }
            },
            autoOrient: function() {}
        }, extendPrototype([
            DynamicPropertyContainer
        ], t1), t1.prototype.addDynamicProperty = function(t1) {
            this._addDynamicProperty(t1), this.elem.addDynamicProperty(t1), this._isDirty = !0;
        }, t1.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(e1, r1, i1) {
                return new t1(e1, r1, i1);
            }
        };
    }();
    ShapePath.prototype.setPathData = function(t1, e1) {
        this.c = t1, this.setLength(e1);
        for(var r1 = 0; r1 < e1;)this.v[r1] = point_pool.newElement(), this.o[r1] = point_pool.newElement(), this.i[r1] = point_pool.newElement(), r1 += 1;
    }, ShapePath.prototype.setLength = function(t1) {
        for(; this._maxLength < t1;)this.doubleArrayLength();
        this._length = t1;
    }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t1, e1, r1, i1, s1) {
        var a1;
        switch(this._length = Math.max(this._length, i1 + 1), this._length >= this._maxLength && this.doubleArrayLength(), r1){
            case "v":
                a1 = this.v;
                break;
            case "i":
                a1 = this.i;
                break;
            case "o":
                a1 = this.o;
        }
        (!a1[i1] || a1[i1] && !s1) && (a1[i1] = point_pool.newElement()), a1[i1][0] = t1, a1[i1][1] = e1;
    }, ShapePath.prototype.setTripleAt = function(t1, e1, r1, i1, s1, a1, n1, o1) {
        this.setXYAt(t1, e1, "v", n1, o1), this.setXYAt(r1, i1, "o", n1, o1), this.setXYAt(s1, a1, "i", n1, o1);
    }, ShapePath.prototype.reverse = function() {
        var t1 = new ShapePath;
        t1.setPathData(this.c, this._length);
        var e1 = this.v, r1 = this.o, i1 = this.i, s1 = 0;
        this.c && (t1.setTripleAt(e1[0][0], e1[0][1], i1[0][0], i1[0][1], r1[0][0], r1[0][1], 0, !1), s1 = 1);
        var a1, n1 = this._length - 1, o1 = this._length;
        for(a1 = s1; a1 < o1; a1 += 1)t1.setTripleAt(e1[n1][0], e1[n1][1], i1[n1][0], i1[n1][1], r1[n1][0], r1[n1][1], a1, !1), n1 -= 1;
        return t1;
    };
    var ShapePropertyFactory = function() {
        function t1(t1, e1, r1) {
            var i1, s1, a1, n1, o1, h1, l1, p1, f1, m1 = r1.lastIndex, c1 = this.keyframes;
            if (t1 < c1[0].t - this.offsetTime) i1 = c1[0].s[0], a1 = !0, m1 = 0;
            else if (t1 >= c1[c1.length - 1].t - this.offsetTime) i1 = c1[c1.length - 1].s ? c1[c1.length - 1].s[0] : c1[c1.length - 2].e[0], a1 = !0;
            else {
                for(var d1, u1, y1 = m1, g1 = c1.length - 1, v1 = !0; v1 && (d1 = c1[y1], !((u1 = c1[y1 + 1]).t - this.offsetTime > t1));)y1 < g1 - 1 ? y1 += 1 : v1 = !1;
                if (m1 = y1, !(a1 = 1 === d1.h)) {
                    if (t1 >= u1.t - this.offsetTime) p1 = 1;
                    else if (t1 < d1.t - this.offsetTime) p1 = 0;
                    else {
                        var b1;
                        d1.__fnct ? b1 = d1.__fnct : (b1 = BezierFactory.getBezierEasing(d1.o.x, d1.o.y, d1.i.x, d1.i.y).get, d1.__fnct = b1), p1 = b1((t1 - (d1.t - this.offsetTime)) / (u1.t - this.offsetTime - (d1.t - this.offsetTime)));
                    }
                    s1 = u1.s ? u1.s[0] : d1.e[0];
                }
                i1 = d1.s[0];
            }
            for(h1 = e1._length, l1 = i1.i[0].length, r1.lastIndex = m1, n1 = 0; n1 < h1; n1 += 1)for(o1 = 0; o1 < l1; o1 += 1)f1 = a1 ? i1.i[n1][o1] : i1.i[n1][o1] + (s1.i[n1][o1] - i1.i[n1][o1]) * p1, e1.i[n1][o1] = f1, f1 = a1 ? i1.o[n1][o1] : i1.o[n1][o1] + (s1.o[n1][o1] - i1.o[n1][o1]) * p1, e1.o[n1][o1] = f1, f1 = a1 ? i1.v[n1][o1] : i1.v[n1][o1] + (s1.v[n1][o1] - i1.v[n1][o1]) * p1, e1.v[n1][o1] = f1;
        }
        function e1() {
            this.paths = this.localShapeCollection;
        }
        function r1(t1) {
            (function(t1, e1) {
                if (t1._length !== e1._length || t1.c !== e1.c) return !1;
                var r1, i1 = t1._length;
                for(r1 = 0; r1 < i1; r1 += 1)if (t1.v[r1][0] !== e1.v[r1][0] || t1.v[r1][1] !== e1.v[r1][1] || t1.o[r1][0] !== e1.o[r1][0] || t1.o[r1][1] !== e1.o[r1][1] || t1.i[r1][0] !== e1.i[r1][0] || t1.i[r1][1] !== e1.i[r1][1]) return !1;
                return !0;
            })(this.v, t1) || (this.v = shape_pool.clone(t1), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
        }
        function i1() {
            if (this.elem.globalData.frameId !== this.frameId) {
                if (this.effectsSequence.length) {
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        this.lock = !0, this._mdf = !1;
                        var t1, e1 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k, r1 = this.effectsSequence.length;
                        for(t1 = 0; t1 < r1; t1 += 1)e1 = this.effectsSequence[t1](e1);
                        this.setVValue(e1), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                    }
                } else this._mdf = !1;
            }
        }
        function s1(t1, r1, i1) {
            this.propType = "shape", this.comp = t1.comp, this.container = t1, this.elem = t1, this.data = r1, this.k = !1, this.kf = !1, this._mdf = !1;
            var s1 = 3 === i1 ? r1.pt.k : r1.ks.k;
            this.v = shape_pool.clone(s1), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = e1, this.effectsSequence = [];
        }
        function a1(t1) {
            this.effectsSequence.push(t1), this.container.addDynamicProperty(this);
        }
        function n1(t1, r1, i1) {
            this.propType = "shape", this.comp = t1.comp, this.elem = t1, this.container = t1, this.offsetTime = t1.data.st, this.keyframes = 3 === i1 ? r1.pt.k : r1.ks.k, this.k = !0, this.kf = !0;
            var s1 = this.keyframes[0].s[0].i.length;
            this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s1), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = o1, this.reset = e1, this._caching = {
                lastFrame: o1,
                lastIndex: 0
            }, this.effectsSequence = [
                (function() {
                    var t1 = this.comp.renderedFrame - this.offsetTime, e1 = this.keyframes[0].t - this.offsetTime, r1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i1 = this._caching.lastFrame;
                    return i1 !== o1 && (i1 < e1 && t1 < e1 || r1 < i1 && r1 < t1) || (this._caching.lastIndex = i1 < t1 ? this._caching.lastIndex : 0, this.interpolateShape(t1, this.pv, this._caching)), this._caching.lastFrame = t1, this.pv;
                }).bind(this)
            ];
        }
        var o1 = -999999;
        s1.prototype.interpolateShape = t1, s1.prototype.getValue = i1, s1.prototype.setVValue = r1, s1.prototype.addEffect = a1, n1.prototype.getValue = i1, n1.prototype.interpolateShape = t1, n1.prototype.setVValue = r1, n1.prototype.addEffect = a1;
        var h1 = function() {
            function t1(t1, e1) {
                this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e1.d, this.elem = t1, this.comp = t1.comp, this.frameId = -1, this.initDynamicPropertyContainer(t1), this.p = PropertyFactory.getProp(t1, e1.p, 1, 0, this), this.s = PropertyFactory.getProp(t1, e1.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
            }
            var r1 = roundCorner;
            return t1.prototype = {
                reset: e1,
                getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                },
                convertEllToPath: function() {
                    var t1 = this.p.v[0], e1 = this.p.v[1], i1 = this.s.v[0] / 2, s1 = this.s.v[1] / 2, a1 = 3 !== this.d, n1 = this.v;
                    n1.v[0][0] = t1, n1.v[0][1] = e1 - s1, n1.v[1][0] = a1 ? t1 + i1 : t1 - i1, n1.v[1][1] = e1, n1.v[2][0] = t1, n1.v[2][1] = e1 + s1, n1.v[3][0] = a1 ? t1 - i1 : t1 + i1, n1.v[3][1] = e1, n1.i[0][0] = a1 ? t1 - i1 * r1 : t1 + i1 * r1, n1.i[0][1] = e1 - s1, n1.i[1][0] = a1 ? t1 + i1 : t1 - i1, n1.i[1][1] = e1 - s1 * r1, n1.i[2][0] = a1 ? t1 + i1 * r1 : t1 - i1 * r1, n1.i[2][1] = e1 + s1, n1.i[3][0] = a1 ? t1 - i1 : t1 + i1, n1.i[3][1] = e1 + s1 * r1, n1.o[0][0] = a1 ? t1 + i1 * r1 : t1 - i1 * r1, n1.o[0][1] = e1 - s1, n1.o[1][0] = a1 ? t1 + i1 : t1 - i1, n1.o[1][1] = e1 + s1 * r1, n1.o[2][0] = a1 ? t1 - i1 * r1 : t1 + i1 * r1, n1.o[2][1] = e1 + s1, n1.o[3][0] = a1 ? t1 - i1 : t1 + i1, n1.o[3][1] = e1 - s1 * r1;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], t1), t1;
        }(), l1 = function() {
            function t1(t1, e1) {
                this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t1, this.comp = t1.comp, this.data = e1, this.frameId = -1, this.d = e1.d, this.initDynamicPropertyContainer(t1), 1 === e1.sy ? (this.ir = PropertyFactory.getProp(t1, e1.ir, 0, 0, this), this.is = PropertyFactory.getProp(t1, e1.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t1, e1.pt, 0, 0, this), this.p = PropertyFactory.getProp(t1, e1.p, 1, 0, this), this.r = PropertyFactory.getProp(t1, e1.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t1, e1.or, 0, 0, this), this.os = PropertyFactory.getProp(t1, e1.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
            }
            return t1.prototype = {
                reset: e1,
                getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                },
                convertStarToPath: function() {
                    var t1, e1, r1, i1, s1 = 2 * Math.floor(this.pt.v), a1 = 2 * Math.PI / s1, n1 = !0, o1 = this.or.v, h1 = this.ir.v, l1 = this.os.v, p1 = this.is.v, f1 = 2 * Math.PI * o1 / (2 * s1), m1 = 2 * Math.PI * h1 / (2 * s1), c1 = -Math.PI / 2;
                    c1 += this.r.v;
                    var d1 = 3 === this.data.d ? -1 : 1;
                    for(t1 = this.v._length = 0; t1 < s1; t1 += 1){
                        r1 = n1 ? l1 : p1, i1 = n1 ? f1 : m1;
                        var u1 = (e1 = n1 ? o1 : h1) * Math.cos(c1), y1 = e1 * Math.sin(c1), g1 = 0 === u1 && 0 === y1 ? 0 : y1 / Math.sqrt(u1 * u1 + y1 * y1), v1 = 0 === u1 && 0 === y1 ? 0 : -u1 / Math.sqrt(u1 * u1 + y1 * y1);
                        u1 += +this.p.v[0], y1 += +this.p.v[1], this.v.setTripleAt(u1, y1, u1 - g1 * i1 * r1 * d1, y1 - v1 * i1 * r1 * d1, u1 + g1 * i1 * r1 * d1, y1 + v1 * i1 * r1 * d1, t1, !0), n1 = !n1, c1 += a1 * d1;
                    }
                },
                convertPolygonToPath: function() {
                    var t1, e1 = Math.floor(this.pt.v), r1 = 2 * Math.PI / e1, i1 = this.or.v, s1 = this.os.v, a1 = 2 * Math.PI * i1 / (4 * e1), n1 = -Math.PI / 2, o1 = 3 === this.data.d ? -1 : 1;
                    for(n1 += this.r.v, t1 = this.v._length = 0; t1 < e1; t1 += 1){
                        var h1 = i1 * Math.cos(n1), l1 = i1 * Math.sin(n1), p1 = 0 === h1 && 0 === l1 ? 0 : l1 / Math.sqrt(h1 * h1 + l1 * l1), f1 = 0 === h1 && 0 === l1 ? 0 : -h1 / Math.sqrt(h1 * h1 + l1 * l1);
                        h1 += +this.p.v[0], l1 += +this.p.v[1], this.v.setTripleAt(h1, l1, h1 - p1 * a1 * s1 * o1, l1 - f1 * a1 * s1 * o1, h1 + p1 * a1 * s1 * o1, l1 + f1 * a1 * s1 * o1, t1, !0), n1 += r1 * o1;
                    }
                    this.paths.length = 0, this.paths[0] = this.v;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], t1), t1;
        }(), p1 = function() {
            function t1(t1, e1) {
                this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t1, this.comp = t1.comp, this.frameId = -1, this.d = e1.d, this.initDynamicPropertyContainer(t1), this.p = PropertyFactory.getProp(t1, e1.p, 1, 0, this), this.s = PropertyFactory.getProp(t1, e1.s, 1, 0, this), this.r = PropertyFactory.getProp(t1, e1.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
            }
            return t1.prototype = {
                convertRectToPath: function() {
                    var t1 = this.p.v[0], e1 = this.p.v[1], r1 = this.s.v[0] / 2, i1 = this.s.v[1] / 2, s1 = bm_min(r1, i1, this.r.v), a1 = s1 * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t1 + r1, e1 - i1 + s1, t1 + r1, e1 - i1 + s1, t1 + r1, e1 - i1 + a1, 0, !0), this.v.setTripleAt(t1 + r1, e1 + i1 - s1, t1 + r1, e1 + i1 - a1, t1 + r1, e1 + i1 - s1, 1, !0), 0 !== s1 ? (this.v.setTripleAt(t1 + r1 - s1, e1 + i1, t1 + r1 - s1, e1 + i1, t1 + r1 - a1, e1 + i1, 2, !0), this.v.setTripleAt(t1 - r1 + s1, e1 + i1, t1 - r1 + a1, e1 + i1, t1 - r1 + s1, e1 + i1, 3, !0), this.v.setTripleAt(t1 - r1, e1 + i1 - s1, t1 - r1, e1 + i1 - s1, t1 - r1, e1 + i1 - a1, 4, !0), this.v.setTripleAt(t1 - r1, e1 - i1 + s1, t1 - r1, e1 - i1 + a1, t1 - r1, e1 - i1 + s1, 5, !0), this.v.setTripleAt(t1 - r1 + s1, e1 - i1, t1 - r1 + s1, e1 - i1, t1 - r1 + a1, e1 - i1, 6, !0), this.v.setTripleAt(t1 + r1 - s1, e1 - i1, t1 + r1 - a1, e1 - i1, t1 + r1 - s1, e1 - i1, 7, !0)) : (this.v.setTripleAt(t1 - r1, e1 + i1, t1 - r1 + a1, e1 + i1, t1 - r1, e1 + i1, 2), this.v.setTripleAt(t1 - r1, e1 - i1, t1 - r1, e1 - i1 + a1, t1 - r1, e1 - i1, 3))) : (this.v.setTripleAt(t1 + r1, e1 - i1 + s1, t1 + r1, e1 - i1 + a1, t1 + r1, e1 - i1 + s1, 0, !0), 0 !== s1 ? (this.v.setTripleAt(t1 + r1 - s1, e1 - i1, t1 + r1 - s1, e1 - i1, t1 + r1 - a1, e1 - i1, 1, !0), this.v.setTripleAt(t1 - r1 + s1, e1 - i1, t1 - r1 + a1, e1 - i1, t1 - r1 + s1, e1 - i1, 2, !0), this.v.setTripleAt(t1 - r1, e1 - i1 + s1, t1 - r1, e1 - i1 + s1, t1 - r1, e1 - i1 + a1, 3, !0), this.v.setTripleAt(t1 - r1, e1 + i1 - s1, t1 - r1, e1 + i1 - a1, t1 - r1, e1 + i1 - s1, 4, !0), this.v.setTripleAt(t1 - r1 + s1, e1 + i1, t1 - r1 + s1, e1 + i1, t1 - r1 + a1, e1 + i1, 5, !0), this.v.setTripleAt(t1 + r1 - s1, e1 + i1, t1 + r1 - a1, e1 + i1, t1 + r1 - s1, e1 + i1, 6, !0), this.v.setTripleAt(t1 + r1, e1 + i1 - s1, t1 + r1, e1 + i1 - s1, t1 + r1, e1 + i1 - a1, 7, !0)) : (this.v.setTripleAt(t1 - r1, e1 - i1, t1 - r1 + a1, e1 - i1, t1 - r1, e1 - i1, 1, !0), this.v.setTripleAt(t1 - r1, e1 + i1, t1 - r1, e1 + i1 - a1, t1 - r1, e1 + i1, 2, !0), this.v.setTripleAt(t1 + r1, e1 + i1, t1 + r1 - a1, e1 + i1, t1 + r1, e1 + i1, 3, !0)));
                },
                getValue: function(t1) {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                },
                reset: e1
            }, extendPrototype([
                DynamicPropertyContainer
            ], t1), t1;
        }(), f1 = {
            getShapeProp: function(t1, e1, r1) {
                var i1;
                return 3 === r1 || 4 === r1 ? i1 = (3 === r1 ? e1.pt : e1.ks).k.length ? new n1(t1, e1, r1) : new s1(t1, e1, r1) : 5 === r1 ? i1 = new p1(t1, e1) : 6 === r1 ? i1 = new h1(t1, e1) : 7 === r1 && (i1 = new l1(t1, e1)), i1.k && t1.addDynamicProperty(i1), i1;
            },
            getConstructorFunction: function() {
                return s1;
            },
            getKeyframedConstructorFunction: function() {
                return n1;
            }
        };
        return f1;
    }(), ShapeModifiers = (fs = {}, gs = {}, fs.registerModifier = function(t1, e1) {
        gs[t1] || (gs[t1] = e1);
    }, fs.getModifier = function(t1, e1, r1) {
        return new gs[t1](e1, r1);
    }, fs), fs, gs;
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t1) {
        if (!this.closed) {
            t1.sh.container.addDynamicProperty(t1.sh);
            var e1 = {
                shape: t1.sh,
                data: t1,
                localShapeCollection: shapeCollection_pool.newShapeCollection()
            };
            this.shapes.push(e1), this.addShapeToModifier(e1), this._isAnimated && t1.setAsAnimated();
        }
    }, ShapeModifier.prototype.init = function(t1, e1) {
        this.shapes = [], this.elem = t1, this.initDynamicPropertyContainer(t1), this.initModifierProperties(t1, e1), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([
        DynamicPropertyContainer
    ], ShapeModifier), extendPrototype([
        ShapeModifier
    ], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t1, e1) {
        this.s = PropertyFactory.getProp(t1, e1.s, 0, .01, this), this.e = PropertyFactory.getProp(t1, e1.e, 0, .01, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e1.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t1) {
        t1.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t1, e1, r1, i1, s1) {
        var a1 = [];
        e1 <= 1 ? a1.push({
            s: t1,
            e: e1
        }) : 1 <= t1 ? a1.push({
            s: t1 - 1,
            e: e1 - 1
        }) : (a1.push({
            s: t1,
            e: 1
        }), a1.push({
            s: 0,
            e: e1 - 1
        }));
        var n1, o1, h1 = [], l1 = a1.length;
        for(n1 = 0; n1 < l1; n1 += 1){
            var p1, f1;
            (o1 = a1[n1]).e * s1 < i1 || o1.s * s1 > i1 + r1 || (p1 = o1.s * s1 <= i1 ? 0 : (o1.s * s1 - i1) / r1, f1 = o1.e * s1 >= i1 + r1 ? 1 : (o1.e * s1 - i1) / r1, h1.push([
                p1,
                f1
            ]));
        }
        return h1.length || h1.push([
            0,
            0
        ]), h1;
    }, TrimModifier.prototype.releasePathsData = function(t1) {
        var e1, r1 = t1.length;
        for(e1 = 0; e1 < r1; e1 += 1)segments_length_pool.release(t1[e1]);
        return t1.length = 0, t1;
    }, TrimModifier.prototype.processShapes = function(t1) {
        var e1, r1, i1;
        if (this._mdf || t1) {
            var s1 = this.o.v % 360 / 360;
            if (s1 < 0 && (s1 += 1), e1 = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s1, (r1 = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s1) < e1) {
                var a1 = e1;
                e1 = r1, r1 = a1;
            }
            e1 = 1e-4 * Math.round(1e4 * e1), r1 = 1e-4 * Math.round(1e4 * r1), this.sValue = e1, this.eValue = r1;
        } else e1 = this.sValue, r1 = this.eValue;
        var n1, o1, h1, l1, p1, f1, m1 = this.shapes.length, c1 = 0;
        if (r1 === e1) for(n1 = 0; n1 < m1; n1 += 1)this.shapes[n1].localShapeCollection.releaseShapes(), this.shapes[n1].shape._mdf = !0, this.shapes[n1].shape.paths = this.shapes[n1].localShapeCollection, this._mdf && (this.shapes[n1].pathsData.length = 0);
        else if (1 === r1 && 0 === e1 || 0 === r1 && 1 === e1) {
            if (this._mdf) for(n1 = 0; n1 < m1; n1 += 1)this.shapes[n1].pathsData.length = 0, this.shapes[n1].shape._mdf = !0;
        } else {
            var d1, u1, y1 = [];
            for(n1 = 0; n1 < m1; n1 += 1)if ((d1 = this.shapes[n1]).shape._mdf || this._mdf || t1 || 2 === this.m) {
                if (h1 = (i1 = d1.shape.paths)._length, f1 = 0, !d1.shape._mdf && d1.pathsData.length) f1 = d1.totalShapeLength;
                else {
                    for(l1 = this.releasePathsData(d1.pathsData), o1 = 0; o1 < h1; o1 += 1)p1 = bez.getSegmentsLength(i1.shapes[o1]), l1.push(p1), f1 += p1.totalLength;
                    d1.totalShapeLength = f1, d1.pathsData = l1;
                }
                c1 += f1, d1.shape._mdf = !0;
            } else d1.shape.paths = d1.localShapeCollection;
            var g1, v1 = e1, b1 = r1, E1 = 0;
            for(n1 = m1 - 1; 0 <= n1; n1 -= 1)if ((d1 = this.shapes[n1]).shape._mdf) {
                for((u1 = d1.localShapeCollection).releaseShapes(), 2 === this.m && 1 < m1 ? (g1 = this.calculateShapeEdges(e1, r1, d1.totalShapeLength, E1, c1), E1 += d1.totalShapeLength) : g1 = [
                    [
                        v1,
                        b1
                    ]
                ], h1 = g1.length, o1 = 0; o1 < h1; o1 += 1){
                    v1 = g1[o1][0], b1 = g1[o1][1], y1.length = 0, b1 <= 1 ? y1.push({
                        s: d1.totalShapeLength * v1,
                        e: d1.totalShapeLength * b1
                    }) : 1 <= v1 ? y1.push({
                        s: d1.totalShapeLength * (v1 - 1),
                        e: d1.totalShapeLength * (b1 - 1)
                    }) : (y1.push({
                        s: d1.totalShapeLength * v1,
                        e: d1.totalShapeLength
                    }), y1.push({
                        s: 0,
                        e: d1.totalShapeLength * (b1 - 1)
                    }));
                    var x1 = this.addShapes(d1, y1[0]);
                    if (y1[0].s !== y1[0].e) {
                        if (1 < y1.length) {
                            if (d1.shape.paths.shapes[d1.shape.paths._length - 1].c) {
                                var P1 = x1.pop();
                                this.addPaths(x1, u1), x1 = this.addShapes(d1, y1[1], P1);
                            } else this.addPaths(x1, u1), x1 = this.addShapes(d1, y1[1]);
                        }
                        this.addPaths(x1, u1);
                    }
                }
                d1.shape.paths = u1;
            }
        }
    }, TrimModifier.prototype.addPaths = function(t1, e1) {
        var r1, i1 = t1.length;
        for(r1 = 0; r1 < i1; r1 += 1)e1.addShape(t1[r1]);
    }, TrimModifier.prototype.addSegment = function(t1, e1, r1, i1, s1, a1, n1) {
        s1.setXYAt(e1[0], e1[1], "o", a1), s1.setXYAt(r1[0], r1[1], "i", a1 + 1), n1 && s1.setXYAt(t1[0], t1[1], "v", a1), s1.setXYAt(i1[0], i1[1], "v", a1 + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t1, e1, r1, i1) {
        e1.setXYAt(t1[1], t1[5], "o", r1), e1.setXYAt(t1[2], t1[6], "i", r1 + 1), i1 && e1.setXYAt(t1[0], t1[4], "v", r1), e1.setXYAt(t1[3], t1[7], "v", r1 + 1);
    }, TrimModifier.prototype.addShapes = function(t1, e1, r1) {
        var i1, s1, a1, n1, o1, h1, l1, p1, f1 = t1.pathsData, m1 = t1.shape.paths.shapes, c1 = t1.shape.paths._length, d1 = 0, u1 = [], y1 = !0;
        for(p1 = r1 ? (o1 = r1._length, r1._length) : (r1 = shape_pool.newElement(), o1 = 0), u1.push(r1), i1 = 0; i1 < c1; i1 += 1){
            for(h1 = f1[i1].lengths, r1.c = m1[i1].c, a1 = m1[i1].c ? h1.length : h1.length + 1, s1 = 1; s1 < a1; s1 += 1)if (d1 + (n1 = h1[s1 - 1]).addedLength < e1.s) d1 += n1.addedLength, r1.c = !1;
            else {
                if (d1 > e1.e) {
                    r1.c = !1;
                    break;
                }
                e1.s <= d1 && e1.e >= d1 + n1.addedLength ? (this.addSegment(m1[i1].v[s1 - 1], m1[i1].o[s1 - 1], m1[i1].i[s1], m1[i1].v[s1], r1, o1, y1), y1 = !1) : (l1 = bez.getNewSegment(m1[i1].v[s1 - 1], m1[i1].v[s1], m1[i1].o[s1 - 1], m1[i1].i[s1], (e1.s - d1) / n1.addedLength, (e1.e - d1) / n1.addedLength, h1[s1 - 1]), this.addSegmentFromArray(l1, r1, o1, y1), y1 = !1, r1.c = !1), d1 += n1.addedLength, o1 += 1;
            }
            if (m1[i1].c && h1.length) {
                if (n1 = h1[s1 - 1], d1 <= e1.e) {
                    var g1 = h1[s1 - 1].addedLength;
                    e1.s <= d1 && e1.e >= d1 + g1 ? (this.addSegment(m1[i1].v[s1 - 1], m1[i1].o[s1 - 1], m1[i1].i[0], m1[i1].v[0], r1, o1, y1), y1 = !1) : (l1 = bez.getNewSegment(m1[i1].v[s1 - 1], m1[i1].v[0], m1[i1].o[s1 - 1], m1[i1].i[0], (e1.s - d1) / g1, (e1.e - d1) / g1, h1[s1 - 1]), this.addSegmentFromArray(l1, r1, o1, y1), y1 = !1, r1.c = !1);
                } else r1.c = !1;
                d1 += n1.addedLength, o1 += 1;
            }
            if (r1._length && (r1.setXYAt(r1.v[p1][0], r1.v[p1][1], "i", p1), r1.setXYAt(r1.v[r1._length - 1][0], r1.v[r1._length - 1][1], "o", r1._length - 1)), d1 > e1.e) break;
            i1 < c1 - 1 && (r1 = shape_pool.newElement(), y1 = !0, u1.push(r1), o1 = 0);
        }
        return u1;
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([
        ShapeModifier
    ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t1, e1) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t1, e1.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t1, e1) {
        var r1 = shape_pool.newElement();
        r1.c = t1.c;
        var i1, s1, a1, n1, o1, h1, l1, p1, f1, m1, c1, d1, u1, y1 = t1._length, g1 = 0;
        for(i1 = 0; i1 < y1; i1 += 1)s1 = t1.v[i1], n1 = t1.o[i1], a1 = t1.i[i1], s1[0] === n1[0] && s1[1] === n1[1] && s1[0] === a1[0] && s1[1] === a1[1] ? 0 !== i1 && i1 !== y1 - 1 || t1.c ? (o1 = 0 === i1 ? t1.v[y1 - 1] : t1.v[i1 - 1], l1 = (h1 = Math.sqrt(Math.pow(s1[0] - o1[0], 2) + Math.pow(s1[1] - o1[1], 2))) ? Math.min(h1 / 2, e1) / h1 : 0, p1 = d1 = s1[0] + (o1[0] - s1[0]) * l1, f1 = u1 = s1[1] - (s1[1] - o1[1]) * l1, m1 = p1 - (p1 - s1[0]) * roundCorner, c1 = f1 - (f1 - s1[1]) * roundCorner, r1.setTripleAt(p1, f1, m1, c1, d1, u1, g1), g1 += 1, o1 = i1 === y1 - 1 ? t1.v[0] : t1.v[i1 + 1], l1 = (h1 = Math.sqrt(Math.pow(s1[0] - o1[0], 2) + Math.pow(s1[1] - o1[1], 2))) ? Math.min(h1 / 2, e1) / h1 : 0, p1 = m1 = s1[0] + (o1[0] - s1[0]) * l1, f1 = c1 = s1[1] + (o1[1] - s1[1]) * l1, d1 = p1 - (p1 - s1[0]) * roundCorner, u1 = f1 - (f1 - s1[1]) * roundCorner, r1.setTripleAt(p1, f1, m1, c1, d1, u1, g1)) : r1.setTripleAt(s1[0], s1[1], n1[0], n1[1], a1[0], a1[1], g1) : r1.setTripleAt(t1.v[i1][0], t1.v[i1][1], t1.o[i1][0], t1.o[i1][1], t1.i[i1][0], t1.i[i1][1], g1), g1 += 1;
        return r1;
    }, RoundCornersModifier.prototype.processShapes = function(t1) {
        var e1, r1, i1, s1, a1, n1, o1 = this.shapes.length, h1 = this.rd.v;
        if (0 !== h1) for(r1 = 0; r1 < o1; r1 += 1){
            if ((a1 = this.shapes[r1]).shape.paths, n1 = a1.localShapeCollection, a1.shape._mdf || this._mdf || t1) for(n1.releaseShapes(), a1.shape._mdf = !0, e1 = a1.shape.paths.shapes, s1 = a1.shape.paths._length, i1 = 0; i1 < s1; i1 += 1)n1.addShape(this.processPath(e1[i1], h1));
            a1.shape.paths = a1.localShapeCollection;
        }
        this.dynamicProperties.length || (this._mdf = !1);
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([
        ShapeModifier
    ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t1, e1) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t1, e1) {
        var r1 = e1 / 100, i1 = [
            0,
            0
        ], s1 = t1._length, a1 = 0;
        for(a1 = 0; a1 < s1; a1 += 1)i1[0] += t1.v[a1][0], i1[1] += t1.v[a1][1];
        i1[0] /= s1, i1[1] /= s1;
        var n1, o1, h1, l1, p1, f1, m1 = shape_pool.newElement();
        for(m1.c = t1.c, a1 = 0; a1 < s1; a1 += 1)n1 = t1.v[a1][0] + (i1[0] - t1.v[a1][0]) * r1, o1 = t1.v[a1][1] + (i1[1] - t1.v[a1][1]) * r1, h1 = t1.o[a1][0] + (i1[0] - t1.o[a1][0]) * -r1, l1 = t1.o[a1][1] + (i1[1] - t1.o[a1][1]) * -r1, p1 = t1.i[a1][0] + (i1[0] - t1.i[a1][0]) * -r1, f1 = t1.i[a1][1] + (i1[1] - t1.i[a1][1]) * -r1, m1.setTripleAt(n1, o1, h1, l1, p1, f1, a1);
        return m1;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t1) {
        var e1, r1, i1, s1, a1, n1, o1 = this.shapes.length, h1 = this.amount.v;
        if (0 !== h1) for(r1 = 0; r1 < o1; r1 += 1){
            if ((a1 = this.shapes[r1]).shape.paths, n1 = a1.localShapeCollection, a1.shape._mdf || this._mdf || t1) for(n1.releaseShapes(), a1.shape._mdf = !0, e1 = a1.shape.paths.shapes, s1 = a1.shape.paths._length, i1 = 0; i1 < s1; i1 += 1)n1.addShape(this.processPath(e1[i1], h1));
            a1.shape.paths = a1.localShapeCollection;
        }
        this.dynamicProperties.length || (this._mdf = !1);
    }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([
        ShapeModifier
    ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t1, e1) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t1, e1.c, 0, null, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t1, e1.tr, this), this.so = PropertyFactory.getProp(t1, e1.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t1, e1.tr.eo, 0, .01, this), this.data = e1, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
    }, RepeaterModifier.prototype.applyTransforms = function(t1, e1, r1, i1, s1, a1) {
        var n1 = a1 ? -1 : 1, o1 = i1.s.v[0] + (1 - i1.s.v[0]) * (1 - s1), h1 = i1.s.v[1] + (1 - i1.s.v[1]) * (1 - s1);
        t1.translate(i1.p.v[0] * n1 * s1, i1.p.v[1] * n1 * s1, i1.p.v[2]), e1.translate(-i1.a.v[0], -i1.a.v[1], i1.a.v[2]), e1.rotate(-i1.r.v * n1 * s1), e1.translate(i1.a.v[0], i1.a.v[1], i1.a.v[2]), r1.translate(-i1.a.v[0], -i1.a.v[1], i1.a.v[2]), r1.scale(a1 ? 1 / o1 : o1, a1 ? 1 / h1 : h1), r1.translate(i1.a.v[0], i1.a.v[1], i1.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t1, e1, r1, i1) {
        for(this.elem = t1, this.arr = e1, this.pos = r1, this.elemsData = i1, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t1), this.initModifierProperties(t1, e1[r1]); 0 < r1;)r1 -= 1, this._elements.unshift(e1[r1]);
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(t1) {
        var e1, r1 = t1.length;
        for(e1 = 0; e1 < r1; e1 += 1)t1[e1]._processed = !1, "gr" === t1[e1].ty && this.resetElements(t1[e1].it);
    }, RepeaterModifier.prototype.cloneElements = function(t1) {
        t1.length;
        var e1 = JSON.parse(JSON.stringify(t1));
        return this.resetElements(e1), e1;
    }, RepeaterModifier.prototype.changeGroupRender = function(t1, e1) {
        var r1, i1 = t1.length;
        for(r1 = 0; r1 < i1; r1 += 1)t1[r1]._render = e1, "gr" === t1[r1].ty && this.changeGroupRender(t1[r1].it, e1);
    }, RepeaterModifier.prototype.processShapes = function(t1) {
        var e1, r1, i1, s1, a1;
        if (this._mdf || t1) {
            var n1, o1 = Math.ceil(this.c.v);
            if (this._groups.length < o1) {
                for(; this._groups.length < o1;){
                    var h1 = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    h1.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [
                                0,
                                0
                            ]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [
                                0,
                                0
                            ]
                        },
                        r: {
                            a: 1,
                            ix: 6,
                            k: [
                                {
                                    s: 0,
                                    e: 0,
                                    t: 0
                                },
                                {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }
                            ]
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [
                                100,
                                100
                            ]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    }), this.arr.splice(0, 0, h1), this._groups.splice(0, 0, h1), this._currentCopies += 1;
                }
                this.elem.reloadShapes();
            }
            for(i1 = a1 = 0; i1 <= this._groups.length - 1; i1 += 1)n1 = a1 < o1, this._groups[i1]._render = n1, this.changeGroupRender(this._groups[i1].it, n1), a1 += 1;
            this._currentCopies = o1;
            var l1 = this.o.v, p1 = l1 % 1, f1 = 0 < l1 ? Math.floor(l1) : Math.ceil(l1), m1 = (this.tr.v.props, this.pMatrix.props), c1 = this.rMatrix.props, d1 = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var u1, y1, g1 = 0;
            if (0 < l1) {
                for(; g1 < f1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g1 += 1;
                p1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p1, !1), g1 += p1);
            } else if (l1 < 0) {
                for(; f1 < g1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g1 -= 1;
                p1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p1, !0), g1 -= p1);
            }
            for(i1 = 1 === this.data.m ? 0 : this._currentCopies - 1, s1 = 1 === this.data.m ? 1 : -1, a1 = this._currentCopies; a1;){
                if (y1 = (r1 = (e1 = this.elemsData[i1].it)[e1.length - 1].transform.mProps.v.props).length, e1[e1.length - 1].transform.mProps._mdf = !0, e1[e1.length - 1].transform.op._mdf = !0, e1[e1.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i1 / (this._currentCopies - 1)), 0 !== g1) {
                    for((0 !== i1 && 1 === s1 || i1 !== this._currentCopies - 1 && -1 === s1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c1[0], c1[1], c1[2], c1[3], c1[4], c1[5], c1[6], c1[7], c1[8], c1[9], c1[10], c1[11], c1[12], c1[13], c1[14], c1[15]), this.matrix.transform(d1[0], d1[1], d1[2], d1[3], d1[4], d1[5], d1[6], d1[7], d1[8], d1[9], d1[10], d1[11], d1[12], d1[13], d1[14], d1[15]), this.matrix.transform(m1[0], m1[1], m1[2], m1[3], m1[4], m1[5], m1[6], m1[7], m1[8], m1[9], m1[10], m1[11], m1[12], m1[13], m1[14], m1[15]), u1 = 0; u1 < y1; u1 += 1)r1[u1] = this.matrix.props[u1];
                    this.matrix.reset();
                } else for(this.matrix.reset(), u1 = 0; u1 < y1; u1 += 1)r1[u1] = this.matrix.props[u1];
                g1 += 1, a1 -= 1, i1 += s1;
            }
        } else for(a1 = this._currentCopies, i1 = 0, s1 = 1; a1;)r1 = (e1 = this.elemsData[i1].it)[e1.length - 1].transform.mProps.v.props, e1[e1.length - 1].transform.mProps._mdf = !1, e1[e1.length - 1].transform.op._mdf = !1, a1 -= 1, i1 += s1;
    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t1) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t1, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
        var t1;
        for(t1 = 0; t1 < this._length; t1 += 1)shape_pool.release(this.shapes[t1]);
        this._length = 0;
    }, DashProperty.prototype.getValue = function(t1) {
        if ((this.elem.globalData.frameId !== this.frameId || t1) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t1, this._mdf)) {
            var e1 = 0, r1 = this.dataProps.length;
            for("svg" === this.renderer && (this.dashStr = ""), e1 = 0; e1 < r1; e1 += 1)"o" != this.dataProps[e1].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e1].p.v : this.dashArray[e1] = this.dataProps[e1].p.v : this.dashoffset[0] = this.dataProps[e1].p.v;
        }
    }, extendPrototype([
        DynamicPropertyContainer
    ], DashProperty), GradientProperty.prototype.comparePoints = function(t1, e1) {
        for(var r1 = 0, i1 = this.o.length / 2; r1 < i1;){
            if (.01 < Math.abs(t1[4 * r1] - t1[4 * e1 + 2 * r1])) return !1;
            r1 += 1;
        }
        return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s) for(var t1 = 0, e1 = this.data.k.k.length; t1 < e1;){
            if (!this.comparePoints(this.data.k.k[t1].s, this.data.p)) return !1;
            t1 += 1;
        }
        else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0;
    }, GradientProperty.prototype.getValue = function(t1) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t1) {
            var e1, r1, i1, s1 = 4 * this.data.p;
            for(e1 = 0; e1 < s1; e1 += 1)r1 = e1 % 4 == 0 ? 100 : 255, i1 = Math.round(this.prop.v[e1] * r1), this.c[e1] !== i1 && (this.c[e1] = i1, this._cmdf = !t1);
            if (this.o.length) for(s1 = this.prop.v.length, e1 = 4 * this.data.p; e1 < s1; e1 += 1)r1 = e1 % 2 == 0 ? 100 : 1, i1 = e1 % 2 == 0 ? Math.round(100 * this.prop.v[e1]) : this.prop.v[e1], this.o[e1 - 4 * this.data.p] !== i1 && (this.o[e1 - 4 * this.data.p] = i1, this._omdf = !t1);
            this._mdf = !t1;
        }
    }, extendPrototype([
        DynamicPropertyContainer
    ], GradientProperty);
    var buildShapeString = function(t1, e1, r1, i1) {
        if (0 === e1) return "";
        var s1, a1 = t1.o, n1 = t1.i, o1 = t1.v, h1 = " M" + i1.applyToPointStringified(o1[0][0], o1[0][1]);
        for(s1 = 1; s1 < e1; s1 += 1)h1 += " C" + i1.applyToPointStringified(a1[s1 - 1][0], a1[s1 - 1][1]) + " " + i1.applyToPointStringified(n1[s1][0], n1[s1][1]) + " " + i1.applyToPointStringified(o1[s1][0], o1[s1][1]);
        return r1 && e1 && (h1 += " C" + i1.applyToPointStringified(a1[s1 - 1][0], a1[s1 - 1][1]) + " " + i1.applyToPointStringified(n1[0][0], n1[0][1]) + " " + i1.applyToPointStringified(o1[0][0], o1[0][1]), h1 += "z"), h1;
    }, ImagePreloader = function() {
        function t1() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
        }
        function e1(t1, e1, r1) {
            var i1 = "";
            if (t1.e) i1 = t1.p;
            else if (e1) {
                var s1 = t1.p;
                -1 !== s1.indexOf("images/") && (s1 = s1.split("/")[1]), i1 = e1 + s1;
            } else i1 = r1, i1 += t1.u ? t1.u : "", i1 += t1.p;
            return i1;
        }
        function r1(e1) {
            this._imageLoaded = t1.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [];
        }
        var i1 = function() {
            var t1 = createTag("canvas");
            t1.width = 1, t1.height = 1;
            var e1 = t1.getContext("2d");
            return e1.fillStyle = "rgba(0,0,0,0)", e1.fillRect(0, 0, 1, 1), t1;
        }();
        return r1.prototype = {
            loadAssets: function(t1, e1) {
                this.imagesLoadedCb = e1;
                var r1, i1 = t1.length;
                for(r1 = 0; r1 < i1; r1 += 1)t1[r1].layers || (this.totalImages += 1, this.images.push(this._createImageData(t1[r1])));
            },
            setAssetsPath: function(t1) {
                this.assetsPath = t1 || "";
            },
            setPath: function(t1) {
                this.path = t1 || "";
            },
            loaded: function() {
                return this.totalImages === this.loadedAssets;
            },
            destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0;
            },
            getImage: function(t1) {
                for(var e1 = 0, r1 = this.images.length; e1 < r1;){
                    if (this.images[e1].assetData === t1) return this.images[e1].img;
                    e1 += 1;
                }
            },
            createImgData: function(t1) {
                var r1 = e1(t1, this.assetsPath, this.path), s1 = createTag("img");
                s1.crossOrigin = "anonymous", s1.addEventListener("load", this._imageLoaded, !1), s1.addEventListener("error", (function() {
                    a1.img = i1, this._imageLoaded();
                }).bind(this), !1), s1.src = r1;
                var a1 = {
                    img: s1,
                    assetData: t1
                };
                return a1;
            },
            createImageData: function(t1) {
                var r1 = e1(t1, this.assetsPath, this.path), s1 = createNS("image");
                s1.addEventListener("load", this._imageLoaded, !1), s1.addEventListener("error", (function() {
                    a1.img = i1, this._imageLoaded();
                }).bind(this), !1), s1.setAttributeNS("http://www.w3.org/1999/xlink", "href", r1);
                var a1 = {
                    img: s1,
                    assetData: t1
                };
                return a1;
            },
            imageLoaded: t1,
            setCacheType: function(t1) {
                this._createImageData = "svg" === t1 ? this.createImageData.bind(this) : this.createImgData.bind(this);
            }
        }, r1;
    }(), featureSupport = (ex = {
        maskType: !0
    }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (ex.maskType = !1), ex), ex, filtersFactory = (fx = {}, fx.createFilter = function(t1) {
        var e1 = createNS("filter");
        return e1.setAttribute("id", t1), e1.setAttribute("filterUnits", "objectBoundingBox"), e1.setAttribute("x", "0%"), e1.setAttribute("y", "0%"), e1.setAttribute("width", "100%"), e1.setAttribute("height", "100%"), e1;
    }, fx.createAlphaToLuminanceFilter = function() {
        var t1 = createNS("feColorMatrix");
        return t1.setAttribute("type", "matrix"), t1.setAttribute("color-interpolation-filters", "sRGB"), t1.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t1;
    }, fx), fx, assetLoader = function() {
        function t1(t1) {
            return t1.response && "object" == typeof t1.response ? t1.response : t1.response && "string" == typeof t1.response ? JSON.parse(t1.response) : t1.responseText ? JSON.parse(t1.responseText) : void 0;
        }
        return {
            load: function(e1, r1, i1) {
                var s1, a1 = new XMLHttpRequest;
                a1.open("GET", e1, !0);
                try {
                    a1.responseType = "json";
                } catch (e1) {}
                a1.send(), a1.onreadystatechange = function() {
                    if (4 == a1.readyState) {
                        if (200 == a1.status) s1 = t1(a1), r1(s1);
                        else try {
                            s1 = t1(a1), r1(s1);
                        } catch (t1) {
                            i1 && i1(t1);
                        }
                    }
                };
            }
        };
    }();
    TextAnimatorProperty.prototype.searchProperties = function() {
        var t1, e1, r1 = this._textData.a.length, i1 = PropertyFactory.getProp;
        for(t1 = 0; t1 < r1; t1 += 1)e1 = this._textData.a[t1], this._animatorsData[t1] = new TextAnimatorDataProperty(this._elem, e1, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
            f: i1(this._elem, this._textData.p.f, 0, 0, this),
            l: i1(this._elem, this._textData.p.l, 0, 0, this),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i1(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t1, e1) {
        if (this.lettersChangedFlag = e1, this._mdf || this._isFirstFrame || e1 || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r1, i1, s1, a1, n1, o1, h1, l1, p1, f1, m1, c1, d1, u1, y1, g1, v1, b1, E1, x1 = this._moreOptions.alignment.v, P1 = this._animatorsData, S1 = this._textData, _1 = this.mHelper, C1 = this._renderType, A1 = this.renderedLetters.length, T1 = (this.data, t1.l);
            if (this._hasMaskedPath) {
                if (E1 = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                    var k1, M1 = E1.v;
                    for(this._pathData.r && (M1 = M1.reverse()), n1 = {
                        tLength: 0,
                        segments: []
                    }, a1 = M1._length - 1, s1 = g1 = 0; s1 < a1; s1 += 1)k1 = bez.buildBezierData(M1.v[s1], M1.v[s1 + 1], [
                        M1.o[s1][0] - M1.v[s1][0],
                        M1.o[s1][1] - M1.v[s1][1]
                    ], [
                        M1.i[s1 + 1][0] - M1.v[s1 + 1][0],
                        M1.i[s1 + 1][1] - M1.v[s1 + 1][1]
                    ]), n1.tLength += k1.segmentLength, n1.segments.push(k1), g1 += k1.segmentLength;
                    s1 = a1, E1.v.c && (k1 = bez.buildBezierData(M1.v[s1], M1.v[0], [
                        M1.o[s1][0] - M1.v[s1][0],
                        M1.o[s1][1] - M1.v[s1][1]
                    ], [
                        M1.i[0][0] - M1.v[0][0],
                        M1.i[0][1] - M1.v[0][1]
                    ]), n1.tLength += k1.segmentLength, n1.segments.push(k1), g1 += k1.segmentLength), this._pathData.pi = n1;
                }
                if (n1 = this._pathData.pi, o1 = this._pathData.f.v, f1 = 1, p1 = (l1 = m1 = 0, true), u1 = n1.segments, o1 < 0 && E1.v.c) for(n1.tLength < Math.abs(o1) && (o1 = -Math.abs(o1) % n1.tLength), f1 = (d1 = u1[m1 = u1.length - 1].points).length - 1; o1 < 0;)o1 += d1[f1].partialLength, (f1 -= 1) < 0 && (f1 = (d1 = u1[m1 -= 1].points).length - 1);
                c1 = (d1 = u1[m1].points)[f1 - 1], y1 = (h1 = d1[f1]).partialLength;
            }
            a1 = T1.length, i1 = r1 = 0;
            var D1, w1, F1, I1, V1 = 1.2 * t1.finalSize * .714, B1 = !0;
            F1 = P1.length;
            var R1, L1, G1, z1, N1, O1, H1, j1, q1, W1, Y1, X1, K1, $1 = -1, J1 = o1, Z1 = m1, U1 = f1, Q1 = -1, tt1 = "", et1 = this.defaultPropsArray;
            if (2 === t1.j || 1 === t1.j) {
                var rt1 = 0, it1 = 0, st1 = 2 === t1.j ? -0.5 : -1, at1 = 0, nt1 = !0;
                for(s1 = 0; s1 < a1; s1 += 1)if (T1[s1].n) {
                    for(rt1 && (rt1 += it1); at1 < s1;)T1[at1].animatorJustifyOffset = rt1, at1 += 1;
                    nt1 = (rt1 = 0, true);
                } else {
                    for(w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).t.propType && (nt1 && 2 === t1.j && (it1 += D1.t.v * st1), (R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars)).length ? rt1 += D1.t.v * R1[0] * st1 : rt1 += D1.t.v * R1 * st1);
                    nt1 = !1;
                }
                for(rt1 && (rt1 += it1); at1 < s1;)T1[at1].animatorJustifyOffset = rt1, at1 += 1;
            }
            for(s1 = 0; s1 < a1; s1 += 1){
                if (_1.reset(), N1 = 1, T1[s1].n) r1 = 0, i1 += t1.yOffset, i1 += B1 ? 1 : 0, o1 = J1, B1 = !1, this._hasMaskedPath && (f1 = U1, c1 = (d1 = u1[m1 = Z1].points)[f1 - 1], y1 = (h1 = d1[f1]).partialLength, l1 = 0), K1 = W1 = X1 = tt1 = "", et1 = this.defaultPropsArray;
                else {
                    if (this._hasMaskedPath) {
                        if (Q1 !== T1[s1].line) {
                            switch(t1.j){
                                case 1:
                                    o1 += g1 - t1.lineWidths[T1[s1].line];
                                    break;
                                case 2:
                                    o1 += (g1 - t1.lineWidths[T1[s1].line]) / 2;
                            }
                            Q1 = T1[s1].line;
                        }
                        $1 !== T1[s1].ind && (T1[$1] && (o1 += T1[$1].extra), o1 += T1[s1].an / 2, $1 = T1[s1].ind), o1 += x1[0] * T1[s1].an / 200;
                        var ot1 = 0;
                        for(w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).p.propType && ((R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars)).length ? ot1 += D1.p.v[0] * R1[0] : ot1 += D1.p.v[0] * R1), D1.a.propType && ((R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars)).length ? ot1 += D1.a.v[0] * R1[0] : ot1 += D1.a.v[0] * R1);
                        for(p1 = !0; p1;)o1 + ot1 <= l1 + y1 || !d1 ? (v1 = (o1 + ot1 - l1) / h1.partialLength, G1 = c1.point[0] + (h1.point[0] - c1.point[0]) * v1, z1 = c1.point[1] + (h1.point[1] - c1.point[1]) * v1, _1.translate(-x1[0] * T1[s1].an / 200, -x1[1] * V1 / 100), p1 = !1) : d1 && (l1 += h1.partialLength, (f1 += 1) >= d1.length && (f1 = 0, d1 = u1[m1 += 1] ? u1[m1].points : E1.v.c ? u1[m1 = f1 = 0].points : (l1 -= h1.partialLength, null)), d1 && (c1 = h1, y1 = (h1 = d1[f1]).partialLength));
                        L1 = T1[s1].an / 2 - T1[s1].add, _1.translate(-L1, 0, 0);
                    } else L1 = T1[s1].an / 2 - T1[s1].add, _1.translate(-L1, 0, 0), _1.translate(-x1[0] * T1[s1].an / 200, -x1[1] * V1 / 100, 0);
                    for(T1[s1].l, w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).t.propType && (R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars), 0 === r1 && 0 === t1.j || (this._hasMaskedPath ? R1.length ? o1 += D1.t.v * R1[0] : o1 += D1.t.v * R1 : R1.length ? r1 += D1.t.v * R1[0] : r1 += D1.t.v * R1));
                    for(T1[s1].l, t1.strokeWidthAnim && (H1 = t1.sw || 0), t1.strokeColorAnim && (O1 = t1.sc ? [
                        t1.sc[0],
                        t1.sc[1],
                        t1.sc[2]
                    ] : [
                        0,
                        0,
                        0
                    ]), t1.fillColorAnim && t1.fc && (j1 = [
                        t1.fc[0],
                        t1.fc[1],
                        t1.fc[2]
                    ]), w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).a.propType && ((R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars)).length ? _1.translate(-D1.a.v[0] * R1[0], -D1.a.v[1] * R1[1], D1.a.v[2] * R1[2]) : _1.translate(-D1.a.v[0] * R1, -D1.a.v[1] * R1, D1.a.v[2] * R1));
                    for(w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).s.propType && ((R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars)).length ? _1.scale(1 + (D1.s.v[0] - 1) * R1[0], 1 + (D1.s.v[1] - 1) * R1[1], 1) : _1.scale(1 + (D1.s.v[0] - 1) * R1, 1 + (D1.s.v[1] - 1) * R1, 1));
                    for(w1 = 0; w1 < F1; w1 += 1){
                        if (D1 = P1[w1].a, R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars), D1.sk.propType && (R1.length ? _1.skewFromAxis(-D1.sk.v * R1[0], D1.sa.v * R1[1]) : _1.skewFromAxis(-D1.sk.v * R1, D1.sa.v * R1)), D1.r.propType && (R1.length ? _1.rotateZ(-D1.r.v * R1[2]) : _1.rotateZ(-D1.r.v * R1)), D1.ry.propType && (R1.length ? _1.rotateY(D1.ry.v * R1[1]) : _1.rotateY(D1.ry.v * R1)), D1.rx.propType && (R1.length ? _1.rotateX(D1.rx.v * R1[0]) : _1.rotateX(D1.rx.v * R1)), D1.o.propType && (R1.length ? N1 += (D1.o.v * R1[0] - N1) * R1[0] : N1 += (D1.o.v * R1 - N1) * R1), t1.strokeWidthAnim && D1.sw.propType && (R1.length ? H1 += D1.sw.v * R1[0] : H1 += D1.sw.v * R1), t1.strokeColorAnim && D1.sc.propType) for(q1 = 0; q1 < 3; q1 += 1)R1.length ? O1[q1] = O1[q1] + (D1.sc.v[q1] - O1[q1]) * R1[0] : O1[q1] = O1[q1] + (D1.sc.v[q1] - O1[q1]) * R1;
                        if (t1.fillColorAnim && t1.fc) {
                            if (D1.fc.propType) for(q1 = 0; q1 < 3; q1 += 1)R1.length ? j1[q1] = j1[q1] + (D1.fc.v[q1] - j1[q1]) * R1[0] : j1[q1] = j1[q1] + (D1.fc.v[q1] - j1[q1]) * R1;
                            D1.fh.propType && (j1 = R1.length ? addHueToRGB(j1, D1.fh.v * R1[0]) : addHueToRGB(j1, D1.fh.v * R1)), D1.fs.propType && (j1 = R1.length ? addSaturationToRGB(j1, D1.fs.v * R1[0]) : addSaturationToRGB(j1, D1.fs.v * R1)), D1.fb.propType && (j1 = R1.length ? addBrightnessToRGB(j1, D1.fb.v * R1[0]) : addBrightnessToRGB(j1, D1.fb.v * R1));
                        }
                    }
                    for(w1 = 0; w1 < F1; w1 += 1)(D1 = P1[w1].a).p.propType && (R1 = P1[w1].s.getMult(T1[s1].anIndexes[w1], S1.a[w1].s.totalChars), this._hasMaskedPath ? R1.length ? _1.translate(0, D1.p.v[1] * R1[0], -D1.p.v[2] * R1[1]) : _1.translate(0, D1.p.v[1] * R1, -D1.p.v[2] * R1) : R1.length ? _1.translate(D1.p.v[0] * R1[0], D1.p.v[1] * R1[1], -D1.p.v[2] * R1[2]) : _1.translate(D1.p.v[0] * R1, D1.p.v[1] * R1, -D1.p.v[2] * R1));
                    if (t1.strokeWidthAnim && (W1 = H1 < 0 ? 0 : H1), t1.strokeColorAnim && (Y1 = "rgb(" + Math.round(255 * O1[0]) + "," + Math.round(255 * O1[1]) + "," + Math.round(255 * O1[2]) + ")"), t1.fillColorAnim && t1.fc && (X1 = "rgb(" + Math.round(255 * j1[0]) + "," + Math.round(255 * j1[1]) + "," + Math.round(255 * j1[2]) + ")"), this._hasMaskedPath) {
                        if (_1.translate(0, -t1.ls), _1.translate(0, x1[1] * V1 / 100 + i1, 0), S1.p.p) {
                            b1 = (h1.point[1] - c1.point[1]) / (h1.point[0] - c1.point[0]);
                            var ht1 = 180 * Math.atan(b1) / Math.PI;
                            h1.point[0] < c1.point[0] && (ht1 += 180), _1.rotate(-ht1 * Math.PI / 180);
                        }
                        _1.translate(G1, z1, 0), o1 -= x1[0] * T1[s1].an / 200, T1[s1 + 1] && $1 !== T1[s1 + 1].ind && (o1 += T1[s1].an / 2, o1 += t1.tr / 1e3 * t1.finalSize);
                    } else {
                        switch(_1.translate(r1, i1, 0), t1.ps && _1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), t1.j){
                            case 1:
                                _1.translate(T1[s1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[T1[s1].line]), 0, 0);
                                break;
                            case 2:
                                _1.translate(T1[s1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[T1[s1].line]) / 2, 0, 0);
                        }
                        _1.translate(0, -t1.ls), _1.translate(L1, 0, 0), _1.translate(x1[0] * T1[s1].an / 200, x1[1] * V1 / 100, 0), r1 += T1[s1].l + t1.tr / 1e3 * t1.finalSize;
                    }
                    "html" === C1 ? tt1 = _1.toCSS() : "svg" === C1 ? tt1 = _1.to2dCSS() : et1 = [
                        _1.props[0],
                        _1.props[1],
                        _1.props[2],
                        _1.props[3],
                        _1.props[4],
                        _1.props[5],
                        _1.props[6],
                        _1.props[7],
                        _1.props[8],
                        _1.props[9],
                        _1.props[10],
                        _1.props[11],
                        _1.props[12],
                        _1.props[13],
                        _1.props[14],
                        _1.props[15]
                    ], K1 = N1;
                }
                this.lettersChangedFlag = A1 <= s1 ? (I1 = new LetterProps(K1, W1, Y1, X1, tt1, et1), this.renderedLetters.push(I1), A1 += 1, !0) : (I1 = this.renderedLetters[s1]).update(K1, W1, Y1, X1, tt1, et1) || this.lettersChangedFlag;
            }
        }
    }, TextAnimatorProperty.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
        DynamicPropertyContainer
    ], TextAnimatorProperty), LetterProps.prototype.update = function(t1, e1, r1, i1, s1, a1) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
        var n1 = this._mdf.p = !1;
        return this.o !== t1 && (this.o = t1, n1 = this._mdf.o = !0), this.sw !== e1 && (this.sw = e1, n1 = this._mdf.sw = !0), this.sc !== r1 && (this.sc = r1, n1 = this._mdf.sc = !0), this.fc !== i1 && (this.fc = i1, n1 = this._mdf.fc = !0), this.m !== s1 && (this.m = s1, n1 = this._mdf.m = !0), !a1.length || this.p[0] === a1[0] && this.p[1] === a1[1] && this.p[4] === a1[4] && this.p[5] === a1[5] && this.p[12] === a1[12] && this.p[13] === a1[13] || (this.p = a1, n1 = this._mdf.p = !0), n1;
    }, TextProperty.prototype.defaultBoxWidth = [
        0,
        0
    ], TextProperty.prototype.copyData = function(t1, e1) {
        for(var r1 in e1)e1.hasOwnProperty(r1) && (t1[r1] = e1[r1]);
        return t1;
    }, TextProperty.prototype.setCurrentData = function(t1) {
        t1.__complete || this.completeTextData(t1), this.currentData = t1, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
        return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t1) {
        this.effectsSequence.push(t1), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t1) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t1) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e1 = this.currentData, r1 = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
                this.lock = !0, this._mdf = !1;
                var i1, s1 = this.effectsSequence.length, a1 = t1 || this.data.d.k[this.keysIndex].s;
                for(i1 = 0; i1 < s1; i1 += 1)a1 = r1 !== this.keysIndex ? this.effectsSequence[i1](a1, a1.t) : this.effectsSequence[i1](this.currentData, a1.t);
                e1 !== a1 && this.setCurrentData(a1), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
    }, TextProperty.prototype.getKeyframeValue = function() {
        for(var t1 = this.data.d.k, e1 = this.elem.comp.renderedFrame, r1 = 0, i1 = t1.length; r1 <= i1 - 1 && (t1[r1].s, !(r1 === i1 - 1 || t1[r1 + 1].t > e1));)r1 += 1;
        return this.keysIndex !== r1 && (this.keysIndex = r1), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t1) {
        for(var e1, r1 = FontManager.getCombinedCharacterCodes(), i1 = [], s1 = 0, a1 = t1.length; s1 < a1;)e1 = t1.charCodeAt(s1), -1 !== r1.indexOf(e1) ? i1[i1.length - 1] += t1.charAt(s1) : 55296 <= e1 && e1 <= 56319 && 56320 <= (e1 = t1.charCodeAt(s1 + 1)) && e1 <= 57343 ? (i1.push(t1.substr(s1, 2)), ++s1) : i1.push(t1.charAt(s1)), s1 += 1;
        return i1;
    }, TextProperty.prototype.completeTextData = function(t1) {
        t1.__complete = !0;
        var e1, r1, i1, s1, a1, n1, o1, h1 = this.elem.globalData.fontManager, l1 = this.data, p1 = [], f1 = 0, m1 = l1.m.g, c1 = 0, d1 = 0, u1 = 0, y1 = [], g1 = 0, v1 = 0, b1 = h1.getFontByName(t1.f), E1 = 0, x1 = b1.fStyle ? b1.fStyle.split(" ") : [], P1 = "normal", S1 = "normal";
        for(r1 = x1.length, e1 = 0; e1 < r1; e1 += 1)switch(x1[e1].toLowerCase()){
            case "italic":
                S1 = "italic";
                break;
            case "bold":
                P1 = "700";
                break;
            case "black":
                P1 = "900";
                break;
            case "medium":
                P1 = "500";
                break;
            case "regular":
            case "normal":
                P1 = "400";
                break;
            case "light":
            case "thin":
                P1 = "200";
        }
        t1.fWeight = b1.fWeight || P1, t1.fStyle = S1, t1.finalSize = t1.s, t1.finalText = this.buildFinalText(t1.t), r1 = t1.finalText.length, t1.finalLineHeight = t1.lh;
        var _1, C1 = t1.tr / 1e3 * t1.finalSize;
        if (t1.sz) for(var A1, T1, k1 = !0, M1 = t1.sz[0], D1 = t1.sz[1]; k1;){
            g1 = A1 = 0, r1 = (T1 = this.buildFinalText(t1.t)).length, C1 = t1.tr / 1e3 * t1.finalSize;
            var w1 = -1;
            for(e1 = 0; e1 < r1; e1 += 1)_1 = T1[e1].charCodeAt(0), i1 = !1, " " === T1[e1] ? w1 = e1 : 13 !== _1 && 3 !== _1 || (i1 = (g1 = 0, true), A1 += t1.finalLineHeight || 1.2 * t1.finalSize), M1 < g1 + (E1 = h1.chars ? (o1 = h1.getCharData(T1[e1], b1.fStyle, b1.fFamily), i1 ? 0 : o1.w * t1.finalSize / 100) : h1.measureText(T1[e1], t1.f, t1.finalSize)) && " " !== T1[e1] ? (-1 === w1 ? r1 += 1 : e1 = w1, A1 += t1.finalLineHeight || 1.2 * t1.finalSize, T1.splice(e1, w1 === e1 ? 1 : 0, "\r"), w1 = -1, g1 = 0) : (g1 += E1, g1 += C1);
            A1 += b1.ascent * t1.finalSize / 100, this.canResize && t1.finalSize > this.minimumFontSize && D1 < A1 ? (t1.finalSize -= 1, t1.finalLineHeight = t1.finalSize * t1.lh / t1.s) : (t1.finalText = T1, r1 = t1.finalText.length, k1 = !1);
        }
        g1 = -C1;
        var F1, I1 = E1 = 0;
        for(e1 = 0; e1 < r1; e1 += 1)if (i1 = !1, 13 === (_1 = (F1 = t1.finalText[e1]).charCodeAt(0)) || 3 === _1 ? (I1 = 0, y1.push(g1), v1 = v1 < g1 ? g1 : v1, g1 = -2 * C1, i1 = (s1 = "", true), u1 += 1) : s1 = F1, E1 = h1.chars ? (o1 = h1.getCharData(F1, b1.fStyle, h1.getFontByName(t1.f).fFamily), i1 ? 0 : o1.w * t1.finalSize / 100) : h1.measureText(s1, t1.f, t1.finalSize), " " === F1 ? I1 += E1 + C1 : (g1 += E1 + C1 + I1, I1 = 0), p1.push({
            l: E1,
            an: E1,
            add: c1,
            n: i1,
            anIndexes: [],
            val: s1,
            line: u1,
            animatorJustifyOffset: 0
        }), 2 == m1) {
            if (c1 += E1, "" === s1 || " " === s1 || e1 === r1 - 1) {
                for("" !== s1 && " " !== s1 || (c1 -= E1); d1 <= e1;)p1[d1].an = c1, p1[d1].ind = f1, p1[d1].extra = E1, d1 += 1;
                f1 += 1, c1 = 0;
            }
        } else if (3 == m1) {
            if (c1 += E1, "" === s1 || e1 === r1 - 1) {
                for("" === s1 && (c1 -= E1); d1 <= e1;)p1[d1].an = c1, p1[d1].ind = f1, p1[d1].extra = E1, d1 += 1;
                c1 = 0, f1 += 1;
            }
        } else p1[f1].ind = f1, p1[f1].extra = 0, f1 += 1;
        if (t1.l = p1, v1 = v1 < g1 ? g1 : v1, y1.push(g1), t1.sz) t1.boxWidth = t1.sz[0], t1.justifyOffset = 0;
        else switch(t1.boxWidth = v1, t1.j){
            case 1:
                t1.justifyOffset = -t1.boxWidth;
                break;
            case 2:
                t1.justifyOffset = -t1.boxWidth / 2;
                break;
            default:
                t1.justifyOffset = 0;
        }
        t1.lineWidths = y1;
        var V1, B1, R1 = l1.a;
        n1 = R1.length;
        var L1, G1, z1 = [];
        for(a1 = 0; a1 < n1; a1 += 1){
            for((V1 = R1[a1]).a.sc && (t1.strokeColorAnim = !0), V1.a.sw && (t1.strokeWidthAnim = !0), (V1.a.fc || V1.a.fh || V1.a.fs || V1.a.fb) && (t1.fillColorAnim = !0), G1 = 0, L1 = V1.s.b, e1 = 0; e1 < r1; e1 += 1)(B1 = p1[e1]).anIndexes[a1] = G1, (1 == L1 && "" !== B1.val || 2 == L1 && "" !== B1.val && " " !== B1.val || 3 == L1 && (B1.n || " " == B1.val || e1 == r1 - 1) || 4 == L1 && (B1.n || e1 == r1 - 1)) && (1 === V1.s.rn && z1.push(G1), G1 += 1);
            l1.a[a1].s.totalChars = G1;
            var N1, O1 = -1;
            if (1 === V1.s.rn) for(e1 = 0; e1 < r1; e1 += 1)O1 != (B1 = p1[e1]).anIndexes[a1] && (O1 = B1.anIndexes[a1], N1 = z1.splice(Math.floor(Math.random() * z1.length), 1)[0]), B1.anIndexes[a1] = N1;
        }
        t1.yOffset = t1.finalLineHeight || 1.2 * t1.finalSize, t1.ls = t1.ls || 0, t1.ascent = b1.ascent * t1.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t1, e1) {
        e1 = void 0 === e1 ? this.keysIndex : e1;
        var r1 = this.copyData({}, this.data.d.k[e1].s);
        r1 = this.copyData(r1, t1), this.data.d.k[e1].s = r1, this.recalculate(e1), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t1) {
        var e1 = this.data.d.k[t1].s;
        e1.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e1);
    }, TextProperty.prototype.canResizeFont = function(t1) {
        this.canResize = t1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t1) {
        this.minimumFontSize = Math.floor(t1) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
        function t1(t1, e1) {
            this._currentTextLength = -1, this.k = !1, this.data = e1, this.elem = t1, this.comp = t1.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t1), this.s = PropertyFactory.getProp(t1, e1.s || {
                k: 0
            }, 0, 0, this), this.e = "e" in e1 ? PropertyFactory.getProp(t1, e1.e, 0, 0, this) : {
                v: 100
            }, this.o = PropertyFactory.getProp(t1, e1.o || {
                k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t1, e1.xe || {
                k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t1, e1.ne || {
                k: 0
            }, 0, 0, this), this.a = PropertyFactory.getProp(t1, e1.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
        }
        var e1 = Math.max, r1 = Math.min, i1 = Math.floor;
        return t1.prototype = {
            getMult: function(t1) {
                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                var s1 = 0, a1 = 0, n1 = 1, o1 = 1;
                0 < this.ne.v ? s1 = this.ne.v / 100 : a1 = -this.ne.v / 100, 0 < this.xe.v ? n1 = 1 - this.xe.v / 100 : o1 = 1 + this.xe.v / 100;
                var h1 = BezierFactory.getBezierEasing(s1, a1, n1, o1).get, l1 = 0, p1 = this.finalS, f1 = this.finalE, m1 = this.data.sh;
                if (2 === m1) l1 = h1(l1 = f1 === p1 ? f1 <= t1 ? 1 : 0 : e1(0, r1(.5 / (f1 - p1) + (t1 - p1) / (f1 - p1), 1)));
                else if (3 === m1) l1 = h1(l1 = f1 === p1 ? f1 <= t1 ? 0 : 1 : 1 - e1(0, r1(.5 / (f1 - p1) + (t1 - p1) / (f1 - p1), 1)));
                else if (4 === m1) f1 === p1 ? l1 = 0 : (l1 = e1(0, r1(.5 / (f1 - p1) + (t1 - p1) / (f1 - p1), 1))) < .5 ? l1 *= 2 : l1 = 1 - 2 * (l1 - .5), l1 = h1(l1);
                else if (5 === m1) {
                    if (f1 === p1) l1 = 0;
                    else {
                        var c1 = f1 - p1, d1 = -c1 / 2 + (t1 = r1(e1(0, t1 + .5 - p1), f1 - p1)), u1 = c1 / 2;
                        l1 = Math.sqrt(1 - d1 * d1 / (u1 * u1));
                    }
                    l1 = h1(l1);
                } else l1 = 6 === m1 ? h1(l1 = f1 === p1 ? 0 : (t1 = r1(e1(0, t1 + .5 - p1), f1 - p1), (1 + Math.cos(Math.PI + 2 * Math.PI * t1 / (f1 - p1))) / 2)) : (t1 >= i1(p1) && (l1 = e1(0, r1(t1 - p1 < 0 ? r1(f1, 1) - (p1 - t1) : f1 - t1, 1))), h1(l1));
                return l1 * this.a.v;
            },
            getValue: function(t1) {
                this.iterateDynamicProperties(), this._mdf = t1 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t1 && 2 === this.data.r && (this.e.v = this._currentTextLength);
                var e1 = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r1 = this.o.v / e1, i1 = this.s.v / e1 + r1, s1 = this.e.v / e1 + r1;
                if (s1 < i1) {
                    var a1 = i1;
                    i1 = s1, s1 = a1;
                }
                this.finalS = i1, this.finalE = s1;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], t1), {
            getTextSelectorProp: function(e1, r1, i1) {
                return new t1(e1, r1, i1);
            }
        };
    }(), pool_factory = function(t1, e1, r1, i1) {
        function s1() {
            return a1 ? o1[a1 -= 1] : e1();
        }
        var a1 = 0, n1 = t1, o1 = createSizedArray(n1);
        return {
            newElement: s1,
            release: function(t1) {
                a1 === n1 && (o1 = pooling.double(o1), n1 *= 2), r1 && r1(t1), o1[a1] = t1, a1 += 1;
            }
        };
    }, pooling = {
        double: function(t1) {
            return t1.concat(createSizedArray(t1.length));
        }
    }, point_pool = pool_factory(8, function() {
        return createTypedArray("float32", 2);
    }), shape_pool = (wB = pool_factory(4, function() {
        return new ShapePath;
    }, function(t1) {
        var e1, r1 = t1._length;
        for(e1 = 0; e1 < r1; e1 += 1)point_pool.release(t1.v[e1]), point_pool.release(t1.i[e1]), point_pool.release(t1.o[e1]), t1.v[e1] = null, t1.i[e1] = null, t1.o[e1] = null;
        t1._length = 0, t1.c = !1;
    }), wB.clone = function(t1) {
        var e1, r1 = wB.newElement(), i1 = void 0 === t1._length ? t1.v.length : t1._length;
        for(r1.setLength(i1), r1.c = t1.c, e1 = 0; e1 < i1; e1 += 1)r1.setTripleAt(t1.v[e1][0], t1.v[e1][1], t1.o[e1][0], t1.o[e1][1], t1.i[e1][0], t1.i[e1][1], e1);
        return r1;
    }, wB), wB, shapeCollection_pool = (FB = {
        newShapeCollection: function() {
            var t1;
            return t1 = GB ? IB[GB -= 1] : new ShapeCollection, t1;
        },
        release: function(t1) {
            var e1, r1 = t1._length;
            for(e1 = 0; e1 < r1; e1 += 1)shape_pool.release(t1.shapes[e1]);
            t1._length = 0, GB === HB && (IB = pooling.double(IB), HB *= 2), IB[GB] = t1, GB += 1;
        }
    }, GB = 0, HB = 4, IB = createSizedArray(HB), FB), FB, GB, HB, IB, segments_length_pool = pool_factory(8, function() {
        return {
            lengths: [],
            totalLength: 0
        };
    }, function(t1) {
        var e1, r1 = t1.lengths.length;
        for(e1 = 0; e1 < r1; e1 += 1)bezier_length_pool.release(t1.lengths[e1]);
        t1.lengths.length = 0;
    }), bezier_length_pool = pool_factory(8, function() {
        return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments)
        };
    });
    BaseRenderer.prototype.checkLayers = function(t1) {
        var e1, r1, i1 = this.layers.length;
        for(this.completeLayers = !0, e1 = i1 - 1; 0 <= e1; e1--)this.elements[e1] || (r1 = this.layers[e1]).ip - r1.st <= t1 - this.layers[e1].st && r1.op - r1.st > t1 - this.layers[e1].st && this.buildItem(e1), this.completeLayers = !!this.elements[e1] && this.completeLayers;
        this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t1) {
        switch(t1.ty){
            case 2:
                return this.createImage(t1);
            case 0:
                return this.createComp(t1);
            case 1:
                return this.createSolid(t1);
            case 3:
                return this.createNull(t1);
            case 4:
                return this.createShape(t1);
            case 5:
                return this.createText(t1);
            case 13:
                return this.createCamera(t1);
        }
        return this.createNull(t1);
    }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.buildAllItems = function() {
        var t1, e1 = this.layers.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.buildItem(t1);
        this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t1) {
        this.completeLayers = !1;
        var e1, r1, i1 = t1.length, s1 = this.layers.length;
        for(e1 = 0; e1 < i1; e1 += 1)for(r1 = 0; r1 < s1;){
            if (this.layers[r1].id == t1[e1].id) {
                this.layers[r1] = t1[e1];
                break;
            }
            r1 += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t1) {
        this.globalData.projectInterface = t1;
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t1, e1, r1) {
        for(var i1 = this.elements, s1 = this.layers, a1 = 0, n1 = s1.length; a1 < n1;)s1[a1].ind == e1 && (i1[a1] && !0 !== i1[a1] ? (r1.push(i1[a1]), i1[a1].setAsParent(), void 0 !== s1[a1].parent ? this.buildElementParenting(t1, s1[a1].parent, r1) : t1.setHierarchy(r1)) : (this.buildItem(a1), this.addPendingElement(t1))), a1 += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t1) {
        this.pendingElements.push(t1);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t1) {
        var e1, r1 = t1.length;
        for(e1 = 0; e1 < r1; e1 += 1)if (t1[e1].xt) {
            var i1 = this.createComp(t1[e1]);
            i1.initExpressions(), this.globalData.projectInterface.registerComposition(i1);
        }
    }, BaseRenderer.prototype.setupGlobalData = function(t1, e1) {
        this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t1.chars), this.globalData.fontManager.addFonts(t1.fonts, e1), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t1.fr, this.globalData.nm = t1.nm, this.globalData.compSize = {
            w: t1.w,
            h: t1.h
        };
    }, extendPrototype([
        BaseRenderer
    ], SVGRenderer), SVGRenderer.prototype.createNull = function(t1) {
        return new NullElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.createShape = function(t1) {
        return new SVGShapeElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.createText = function(t1) {
        return new SVGTextElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.createImage = function(t1) {
        return new IImageElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.createComp = function(t1) {
        return new SVGCompElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.createSolid = function(t1) {
        return new ISolidElement(t1, this.globalData, this);
    }, SVGRenderer.prototype.configAnimation = function(t1) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t1.w + " " + t1.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t1.w), this.svgElement.setAttribute("height", t1.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var e1 = this.globalData.defs;
        this.setupGlobalData(t1, e1), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t1;
        var r1 = createNS("clipPath"), i1 = createNS("rect");
        i1.setAttribute("width", t1.w), i1.setAttribute("height", t1.h), i1.setAttribute("x", 0), i1.setAttribute("y", 0);
        var s1 = createElementID();
        r1.setAttribute("id", s1), r1.appendChild(i1), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s1 + ")"), e1.appendChild(r1), this.layers = t1.layers, this.elements = createSizedArray(t1.layers.length);
    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t1, e1 = this.layers ? this.layers.length : 0;
        for(t1 = 0; t1 < e1; t1++)this.elements[t1] && this.elements[t1].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t1) {
        var e1 = this.elements;
        if (!e1[t1] && 99 != this.layers[t1].ty) {
            e1[t1] = !0;
            var r1 = this.createItem(this.layers[t1]);
            e1[t1] = r1, expressionsPlugin && (0 === this.layers[t1].ty && this.globalData.projectInterface.registerComposition(r1), r1.initExpressions()), this.appendElementInPos(r1, t1), this.layers[t1].tt && (this.elements[t1 - 1] && !0 !== this.elements[t1 - 1] ? r1.setMatte(e1[t1 - 1].layerId) : (this.buildItem(t1 - 1), this.addPendingElement(r1)));
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for(; this.pendingElements.length;){
            var t1 = this.pendingElements.pop();
            if (t1.checkParenting(), t1.data.tt) for(var e1 = 0, r1 = this.elements.length; e1 < r1;){
                if (this.elements[e1] === t1) {
                    t1.setMatte(this.elements[e1 - 1].layerId);
                    break;
                }
                e1 += 1;
            }
        }
    }, SVGRenderer.prototype.renderFrame = function(t1) {
        if (this.renderedFrame !== t1 && !this.destroyed) {
            null === t1 ? t1 = this.renderedFrame : this.renderedFrame = t1, this.globalData.frameNum = t1, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t1, this.globalData._mdf = !1;
            var e1, r1 = this.layers.length;
            for(this.completeLayers || this.checkLayers(t1), e1 = r1 - 1; 0 <= e1; e1--)(this.completeLayers || this.elements[e1]) && this.elements[e1].prepareFrame(t1 - this.layers[e1].st);
            if (this.globalData._mdf) for(e1 = 0; e1 < r1; e1 += 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].renderFrame();
        }
    }, SVGRenderer.prototype.appendElementInPos = function(t1, e1) {
        var r1 = t1.getBaseElement();
        if (r1) {
            for(var i1, s1 = 0; s1 < e1;)this.elements[s1] && !0 !== this.elements[s1] && this.elements[s1].getBaseElement() && (i1 = this.elements[s1].getBaseElement()), s1 += 1;
            i1 ? this.layerElement.insertBefore(r1, i1) : this.layerElement.appendChild(r1);
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none";
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block";
    }, extendPrototype([
        BaseRenderer
    ], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t1) {
        return new CVShapeElement(t1, this.globalData, this);
    }, CanvasRenderer.prototype.createText = function(t1) {
        return new CVTextElement(t1, this.globalData, this);
    }, CanvasRenderer.prototype.createImage = function(t1) {
        return new CVImageElement(t1, this.globalData, this);
    }, CanvasRenderer.prototype.createComp = function(t1) {
        return new CVCompElement(t1, this.globalData, this);
    }, CanvasRenderer.prototype.createSolid = function(t1) {
        return new CVSolidElement(t1, this.globalData, this);
    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t1) {
        if (1 !== t1[0] || 0 !== t1[1] || 0 !== t1[4] || 1 !== t1[5] || 0 !== t1[12] || 0 !== t1[13]) {
            if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t1);
                var e1 = this.contextData.cTr.props;
                this.transformMat.transform(e1[0], e1[1], e1[2], e1[3], e1[4], e1[5], e1[6], e1[7], e1[8], e1[9], e1[10], e1[11], e1[12], e1[13], e1[14], e1[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r1 = this.contextData.cTr.props;
                this.canvasContext.setTransform(r1[0], r1[1], r1[4], r1[5], r1[12], r1[13]);
            } else this.canvasContext.transform(t1[0], t1[1], t1[4], t1[5], t1[12], t1[13]);
        }
    }, CanvasRenderer.prototype.ctxOpacity = function(t1) {
        if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t1 < 0 ? 0 : t1, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
        this.contextData.cO *= t1 < 0 ? 0 : t1, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
    }, CanvasRenderer.prototype.reset = function() {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRenderer.prototype.save = function(t1) {
        if (this.renderConfig.clearCanvas) {
            t1 && this.canvasContext.save();
            var e1 = this.contextData.cTr.props;
            this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
            var r1, i1 = this.contextData.saved[this.contextData.cArrPos];
            for(r1 = 0; r1 < 16; r1 += 1)i1[r1] = e1[r1];
            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
        } else this.canvasContext.save();
    }, CanvasRenderer.prototype.restore = function(t1) {
        if (this.renderConfig.clearCanvas) {
            t1 && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
            var e1, r1 = this.contextData.saved[this.contextData.cArrPos], i1 = this.contextData.cTr.props;
            for(e1 = 0; e1 < 16; e1 += 1)i1[e1] = r1[e1];
            this.canvasContext.setTransform(r1[0], r1[1], r1[4], r1[5], r1[12], r1[13]), r1 = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r1, this.globalData.currentGlobalAlpha !== r1 && (this.canvasContext.globalAlpha = r1, this.globalData.currentGlobalAlpha = r1);
        } else this.canvasContext.restore();
    }, CanvasRenderer.prototype.configAnimation = function(t1) {
        this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t1, this.layers = t1.layers, this.transformCanvas = {
            w: t1.w,
            h: t1.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
        }, this.setupGlobalData(t1, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t1.layers.length), this.updateContainerSize();
    }, CanvasRenderer.prototype.updateContainerSize = function() {
        var t1, e1, r1, i1;
        if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t1 = this.animationItem.wrapper.offsetWidth, e1 = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t1 * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e1 * this.renderConfig.dpr)) : (t1 = this.canvasContext.canvas.width * this.renderConfig.dpr, e1 = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s1 = this.renderConfig.preserveAspectRatio.split(" "), a1 = s1[1] || "meet", n1 = s1[0] || "xMidYMid", o1 = n1.substr(0, 4), h1 = n1.substr(4);
            r1 = t1 / e1, i1 = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r1 < i1 && "meet" === a1 || i1 < r1 && "slice" === a1 ? (this.transformCanvas.sx = t1 / (this.transformCanvas.w / this.renderConfig.dpr), t1 / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e1 / (this.transformCanvas.h / this.renderConfig.dpr), e1 / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o1 && (i1 < r1 && "meet" === a1 || r1 < i1 && "slice" === a1) ? (t1 - this.transformCanvas.w * (e1 / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o1 && (i1 < r1 && "meet" === a1 || r1 < i1 && "slice" === a1) ? (t1 - this.transformCanvas.w * (e1 / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h1 && (r1 < i1 && "meet" === a1 || i1 < r1 && "slice" === a1) ? (e1 - this.transformCanvas.h * (t1 / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h1 && (r1 < i1 && "meet" === a1 || i1 < r1 && "slice" === a1) ? (e1 - this.transformCanvas.h * (t1 / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t1 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e1 / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
        this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1
        ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRenderer.prototype.destroy = function() {
        var t1;
        for(this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t1 = (this.layers ? this.layers.length : 0) - 1; 0 <= t1; t1 -= 1)this.elements[t1] && this.elements[t1].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRenderer.prototype.renderFrame = function(t1, e1) {
        if ((this.renderedFrame !== t1 || !0 !== this.renderConfig.clearCanvas || e1) && !this.destroyed && -1 !== t1) {
            this.renderedFrame = t1, this.globalData.frameNum = t1 - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e1, this.globalData.projectInterface.currentFrame = t1;
            var r1, i1 = this.layers.length;
            for(this.completeLayers || this.checkLayers(t1), r1 = 0; r1 < i1; r1++)(this.completeLayers || this.elements[r1]) && this.elements[r1].prepareFrame(t1 - this.layers[r1].st);
            if (this.globalData._mdf) {
                for(!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r1 = i1 - 1; 0 <= r1; r1 -= 1)(this.completeLayers || this.elements[r1]) && this.elements[r1].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
            }
        }
    }, CanvasRenderer.prototype.buildItem = function(t1) {
        var e1 = this.elements;
        if (!e1[t1] && 99 != this.layers[t1].ty) {
            var r1 = this.createItem(this.layers[t1], this, this.globalData);
            (e1[t1] = r1).initExpressions();
        }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
        for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
    }, CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none";
    }, CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block";
    }, extendPrototype([
        BaseRenderer
    ], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
        for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
    }, HybridRenderer.prototype.appendElementInPos = function(t1, e1) {
        var r1 = t1.getBaseElement();
        if (r1) {
            var i1 = this.layers[e1];
            if (i1.ddd && this.supports3d) this.addTo3dContainer(r1, e1);
            else if (this.threeDElements) this.addTo3dContainer(r1, e1);
            else {
                for(var s1, a1, n1 = 0; n1 < e1;)this.elements[n1] && !0 !== this.elements[n1] && this.elements[n1].getBaseElement && (a1 = this.elements[n1], s1 = (this.layers[n1].ddd ? this.getThreeDContainerByPos(n1) : a1.getBaseElement()) || s1), n1 += 1;
                s1 ? i1.ddd && this.supports3d || this.layerElement.insertBefore(r1, s1) : i1.ddd && this.supports3d || this.layerElement.appendChild(r1);
            }
        }
    }, HybridRenderer.prototype.createShape = function(t1) {
        return this.supports3d ? new HShapeElement(t1, this.globalData, this) : new SVGShapeElement(t1, this.globalData, this);
    }, HybridRenderer.prototype.createText = function(t1) {
        return this.supports3d ? new HTextElement(t1, this.globalData, this) : new SVGTextElement(t1, this.globalData, this);
    }, HybridRenderer.prototype.createCamera = function(t1) {
        return this.camera = new HCameraElement(t1, this.globalData, this), this.camera;
    }, HybridRenderer.prototype.createImage = function(t1) {
        return this.supports3d ? new HImageElement(t1, this.globalData, this) : new IImageElement(t1, this.globalData, this);
    }, HybridRenderer.prototype.createComp = function(t1) {
        return this.supports3d ? new HCompElement(t1, this.globalData, this) : new SVGCompElement(t1, this.globalData, this);
    }, HybridRenderer.prototype.createSolid = function(t1) {
        return this.supports3d ? new HSolidElement(t1, this.globalData, this) : new ISolidElement(t1, this.globalData, this);
    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t1) {
        for(var e1 = 0, r1 = this.threeDElements.length; e1 < r1;){
            if (this.threeDElements[e1].startPos <= t1 && this.threeDElements[e1].endPos >= t1) return this.threeDElements[e1].perspectiveElem;
            e1 += 1;
        }
    }, HybridRenderer.prototype.createThreeDContainer = function(t1, e1) {
        var r1 = createTag("div");
        styleDiv(r1);
        var i1 = createTag("div");
        styleDiv(i1), "3d" === e1 && (r1.style.width = this.globalData.compSize.w + "px", r1.style.height = this.globalData.compSize.h + "px", r1.style.transformOrigin = r1.style.mozTransformOrigin = r1.style.webkitTransformOrigin = "50% 50%", i1.style.transform = i1.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r1.appendChild(i1);
        var s1 = {
            container: i1,
            perspectiveElem: r1,
            startPos: t1,
            endPos: t1,
            type: e1
        };
        return this.threeDElements.push(s1), s1;
    }, HybridRenderer.prototype.build3dContainers = function() {
        var t1, e1, r1 = this.layers.length, i1 = "";
        for(t1 = 0; t1 < r1; t1 += 1)this.layers[t1].ddd && 3 !== this.layers[t1].ty ? "3d" !== i1 && (i1 = "3d", e1 = this.createThreeDContainer(t1, "3d")) : "2d" !== i1 && (i1 = "2d", e1 = this.createThreeDContainer(t1, "2d")), e1.endPos = Math.max(e1.endPos, t1);
        for(t1 = (r1 = this.threeDElements.length) - 1; 0 <= t1; t1--)this.resizerElem.appendChild(this.threeDElements[t1].perspectiveElem);
    }, HybridRenderer.prototype.addTo3dContainer = function(t1, e1) {
        for(var r1 = 0, i1 = this.threeDElements.length; r1 < i1;){
            if (e1 <= this.threeDElements[r1].endPos) {
                for(var s1, a1 = this.threeDElements[r1].startPos; a1 < e1;)this.elements[a1] && this.elements[a1].getBaseElement && (s1 = this.elements[a1].getBaseElement()), a1 += 1;
                s1 ? this.threeDElements[r1].container.insertBefore(t1, s1) : this.threeDElements[r1].container.appendChild(t1);
                break;
            }
            r1 += 1;
        }
    }, HybridRenderer.prototype.configAnimation = function(t1) {
        var e1 = createTag("div"), r1 = this.animationItem.wrapper;
        e1.style.width = t1.w + "px", e1.style.height = t1.h + "px", styleDiv(this.resizerElem = e1), e1.style.transformStyle = e1.style.webkitTransformStyle = e1.style.mozTransformStyle = "flat", this.renderConfig.className && e1.setAttribute("class", this.renderConfig.className), r1.appendChild(e1), e1.style.overflow = "hidden";
        var i1 = createNS("svg");
        i1.setAttribute("width", "1"), i1.setAttribute("height", "1"), styleDiv(i1), this.resizerElem.appendChild(i1);
        var s1 = createNS("defs");
        i1.appendChild(s1), this.data = t1, this.setupGlobalData(t1, i1), this.globalData.defs = s1, this.layers = t1.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
        var t1, e1 = this.layers ? this.layers.length : 0;
        for(t1 = 0; t1 < e1; t1++)this.elements[t1].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRenderer.prototype.updateContainerSize = function() {
        var t1, e1, r1, i1, s1 = this.animationItem.wrapper.offsetWidth, a1 = this.animationItem.wrapper.offsetHeight;
        i1 = s1 / a1 < this.globalData.compSize.w / this.globalData.compSize.h ? (t1 = s1 / this.globalData.compSize.w, e1 = s1 / this.globalData.compSize.w, r1 = 0, (a1 - this.globalData.compSize.h * (s1 / this.globalData.compSize.w)) / 2) : (t1 = a1 / this.globalData.compSize.h, e1 = a1 / this.globalData.compSize.h, r1 = (s1 - this.globalData.compSize.w * (a1 / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t1 + ",0,0,0,0," + e1 + ",0,0,0,0,1,0," + r1 + "," + i1 + ",0,1)";
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none";
    }, HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block";
    }, HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
            var t1, e1 = this.globalData.compSize.w, r1 = this.globalData.compSize.h, i1 = this.threeDElements.length;
            for(t1 = 0; t1 < i1; t1 += 1)this.threeDElements[t1].perspectiveElem.style.perspective = this.threeDElements[t1].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e1, 2) + Math.pow(r1, 2)) + "px";
        }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t1) {
        var e1, r1 = t1.length, i1 = createTag("div");
        for(e1 = 0; e1 < r1; e1 += 1)if (t1[e1].xt) {
            var s1 = this.createComp(t1[e1], i1, this.globalData.comp, null);
            s1.initExpressions(), this.globalData.projectInterface.registerComposition(s1);
        }
    }, MaskElement.prototype.getMaskProperty = function(t1) {
        return this.viewData[t1].prop;
    }, MaskElement.prototype.renderFrame = function(t1) {
        var e1, r1 = this.element.finalTransform.mat, i1 = this.masksProperties.length;
        for(e1 = 0; e1 < i1; e1++)if ((this.viewData[e1].prop._mdf || t1) && this.drawPath(this.masksProperties[e1], this.viewData[e1].prop.v, this.viewData[e1]), (this.viewData[e1].op._mdf || t1) && this.viewData[e1].elem.setAttribute("fill-opacity", this.viewData[e1].op.v), "n" !== this.masksProperties[e1].mode && (this.viewData[e1].invRect && (this.element.finalTransform.mProp._mdf || t1) && this.viewData[e1].invRect.setAttribute("transform", r1.getInverseMatrix().to2dCSS()), this.storedData[e1].x && (this.storedData[e1].x._mdf || t1))) {
            var s1 = this.storedData[e1].expan;
            this.storedData[e1].x.v < 0 ? ("erode" !== this.storedData[e1].lastOperator && (this.storedData[e1].lastOperator = "erode", this.storedData[e1].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e1].filterId + ")")), s1.setAttribute("radius", -this.storedData[e1].x.v)) : ("dilate" !== this.storedData[e1].lastOperator && (this.storedData[e1].lastOperator = "dilate", this.storedData[e1].elem.setAttribute("filter", null)), this.storedData[e1].elem.setAttribute("stroke-width", 2 * this.storedData[e1].x.v));
        }
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t1 = "M0,0 ";
        return t1 += " h" + this.globalData.compSize.w, t1 += " v" + this.globalData.compSize.h, t1 += " h-" + this.globalData.compSize.w, t1 + " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(t1, e1, r1) {
        var i1, s1, a1 = " M" + e1.v[0][0] + "," + e1.v[0][1];
        for(s1 = e1._length, i1 = 1; i1 < s1; i1 += 1)a1 += " C" + e1.o[i1 - 1][0] + "," + e1.o[i1 - 1][1] + " " + e1.i[i1][0] + "," + e1.i[i1][1] + " " + e1.v[i1][0] + "," + e1.v[i1][1];
        if (e1.c && 1 < s1 && (a1 += " C" + e1.o[i1 - 1][0] + "," + e1.o[i1 - 1][1] + " " + e1.i[0][0] + "," + e1.i[0][1] + " " + e1.v[0][0] + "," + e1.v[0][1]), r1.lastPath !== a1) {
            var n1 = "";
            r1.elem && (e1.c && (n1 = t1.inv ? this.solidPath + a1 : a1), r1.elem.setAttribute("d", n1)), r1.lastPath = a1;
        }
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    }, HierarchyElement.prototype = {
        initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting();
        },
        setHierarchy: function(t1) {
            this.hierarchy = t1;
        },
        setAsParent: function() {
            this._isParent = !0;
        },
        checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
        }
    }, FrameElement.prototype = {
        initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
        },
        prepareProperties: function(t1, e1) {
            var r1, i1 = this.dynamicProperties.length;
            for(r1 = 0; r1 < i1; r1 += 1)(e1 || this._isParent && "transform" === this.dynamicProperties[r1].propType) && (this.dynamicProperties[r1].getValue(), this.dynamicProperties[r1]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
        },
        addDynamicProperty: function(t1) {
            -1 === this.dynamicProperties.indexOf(t1) && this.dynamicProperties.push(t1);
        }
    }, TransformElement.prototype = {
        initTransform: function() {
            this.finalTransform = {
                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                    o: 0
                },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
        },
        renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                var t1, e1 = this.finalTransform.mat, r1 = 0, i1 = this.hierarchy.length;
                if (!this.finalTransform._matMdf) for(; r1 < i1;){
                    if (this.hierarchy[r1].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = !0;
                        break;
                    }
                    r1 += 1;
                }
                if (this.finalTransform._matMdf) for(t1 = this.finalTransform.mProp.v.props, e1.cloneFromProps(t1), r1 = 0; r1 < i1; r1 += 1)t1 = this.hierarchy[r1].finalTransform.mProp.v.props, e1.transform(t1[0], t1[1], t1[2], t1[3], t1[4], t1[5], t1[6], t1[7], t1[8], t1[9], t1[10], t1[11], t1[12], t1[13], t1[14], t1[15]);
            }
        },
        globalToLocal: function(t1) {
            var e1 = [];
            e1.push(this.finalTransform);
            for(var r1 = !0, i1 = this.comp; r1;)i1.finalTransform ? (i1.data.hasMask && e1.splice(0, 0, i1.finalTransform), i1 = i1.comp) : r1 = !1;
            var s1, a1, n1 = e1.length;
            for(s1 = 0; s1 < n1; s1 += 1)a1 = e1[s1].mat.applyToPointArray(0, 0, 0), t1 = [
                t1[0] - a1[0],
                t1[1] - a1[1],
                0
            ];
            return t1;
        },
        mHelper: new Matrix
    }, RenderableElement.prototype = {
        initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
        },
        addRenderableComponent: function(t1) {
            -1 === this.renderableComponents.indexOf(t1) && this.renderableComponents.push(t1);
        },
        removeRenderableComponent: function(t1) {
            -1 !== this.renderableComponents.indexOf(t1) && this.renderableComponents.splice(this.renderableComponents.indexOf(t1), 1);
        },
        prepareRenderableFrame: function(t1) {
            this.checkLayerLimits(t1);
        },
        checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
        },
        checkLayerLimits: function(t1) {
            this.data.ip - this.data.st <= t1 && this.data.op - this.data.st > t1 ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
        },
        renderRenderable: function() {
            var t1, e1 = this.renderableComponents.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.renderableComponents[t1].renderFrame(this._isFirstFrame);
        },
        sourceRectAtTime: function() {
            return {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            };
        },
        getLayerSize: function() {
            return 5 === this.data.ty ? {
                w: this.data.textData.width,
                h: this.data.textData.height
            } : {
                w: this.data.width,
                h: this.data.height
            };
        }
    }, extendPrototype([
        RenderableElement,
        createProxyFunction({
            initElement: function(t1, e1, r1) {
                this.initFrame(), this.initBaseData(t1, e1, r1), this.initTransform(t1, e1, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
            },
            renderInnerContent: function() {},
            prepareFrame: function(t1) {
                this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange), this.checkTransparency();
            },
            destroy: function() {
                this.innerElem = null, this.destroyBaseElement();
            }
        })
    ], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
        this.d = "", this._mdf = !1;
    }, SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = !0;
    }, extendPrototype([
        DynamicPropertyContainer
    ], SVGStrokeStyleData), extendPrototype([
        DynamicPropertyContainer
    ], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t1, e1, r1) {
        this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.s = PropertyFactory.getProp(t1, e1.s, 1, null, this), this.e = PropertyFactory.getProp(t1, e1.e, 1, null, this), this.h = PropertyFactory.getProp(t1, e1.h || {
            k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(t1, e1.a || {
            k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(t1, e1.g, this), this.style = r1, this.stops = [], this.setGradientData(r1.pElem, e1), this.setGradientOpacity(e1, r1), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t1, e1) {
        var r1 = createElementID(), i1 = createNS(1 === e1.t ? "linearGradient" : "radialGradient");
        i1.setAttribute("id", r1), i1.setAttribute("spreadMethod", "pad"), i1.setAttribute("gradientUnits", "userSpaceOnUse");
        var s1, a1, n1, o1 = [];
        for(n1 = 4 * e1.g.p, a1 = 0; a1 < n1; a1 += 4)s1 = createNS("stop"), i1.appendChild(s1), o1.push(s1);
        t1.setAttribute("gf" === e1.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r1 + ")"), this.gf = i1, this.cst = o1;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t1, e1) {
        if (this.g._hasOpacity && !this.g._collapsable) {
            var r1, i1, s1, a1 = createNS("mask"), n1 = createNS("path");
            a1.appendChild(n1);
            var o1 = createElementID(), h1 = createElementID();
            a1.setAttribute("id", h1);
            var l1 = createNS(1 === t1.t ? "linearGradient" : "radialGradient");
            l1.setAttribute("id", o1), l1.setAttribute("spreadMethod", "pad"), l1.setAttribute("gradientUnits", "userSpaceOnUse"), s1 = t1.g.k.k[0].s ? t1.g.k.k[0].s.length : t1.g.k.k.length;
            var p1 = this.stops;
            for(i1 = 4 * t1.g.p; i1 < s1; i1 += 2)(r1 = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l1.appendChild(r1), p1.push(r1);
            n1.setAttribute("gf" === t1.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o1 + ")"), this.of = l1, this.ms = a1, this.ost = p1, this.maskId = h1, e1.msElem = n1;
        }
    }, extendPrototype([
        DynamicPropertyContainer
    ], SVGGradientFillStyleData), extendPrototype([
        SVGGradientFillStyleData,
        DynamicPropertyContainer
    ], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = function() {
        function t1(t1, e1, r1) {
            (r1 || e1.transform.op._mdf) && e1.transform.container.setAttribute("opacity", e1.transform.op.v), (r1 || e1.transform.mProps._mdf) && e1.transform.container.setAttribute("transform", e1.transform.mProps.v.to2dCSS());
        }
        function e1(t1, e1, r1) {
            var i1, s1, a1, h1, l1, p1, f1, m1, c1, d1, u1, y1 = e1.styles.length, g1 = e1.lvl;
            for(p1 = 0; p1 < y1; p1 += 1){
                if (h1 = e1.sh._mdf || r1, e1.styles[p1].lvl < g1) {
                    for(m1 = o1.reset(), d1 = g1 - e1.styles[p1].lvl, u1 = e1.transformers.length - 1; !h1 && 0 < d1;)h1 = e1.transformers[u1].mProps._mdf || h1, d1--, u1--;
                    if (h1) for(d1 = g1 - e1.styles[p1].lvl, u1 = e1.transformers.length - 1; 0 < d1;)c1 = e1.transformers[u1].mProps.v.props, m1.transform(c1[0], c1[1], c1[2], c1[3], c1[4], c1[5], c1[6], c1[7], c1[8], c1[9], c1[10], c1[11], c1[12], c1[13], c1[14], c1[15]), d1--, u1--;
                } else m1 = n1;
                if (s1 = (f1 = e1.sh.paths)._length, h1) {
                    for(a1 = "", i1 = 0; i1 < s1; i1 += 1)(l1 = f1.shapes[i1]) && l1._length && (a1 += buildShapeString(l1, l1._length, l1.c, m1));
                    e1.caches[p1] = a1;
                } else a1 = e1.caches[p1];
                e1.styles[p1].d += !0 === t1.hd ? "" : a1, e1.styles[p1]._mdf = h1 || e1.styles[p1]._mdf;
            }
        }
        function r1(t1, e1, r1) {
            var i1 = e1.style;
            (e1.c._mdf || r1) && i1.pElem.setAttribute("fill", "rgb(" + bm_floor(e1.c.v[0]) + "," + bm_floor(e1.c.v[1]) + "," + bm_floor(e1.c.v[2]) + ")"), (e1.o._mdf || r1) && i1.pElem.setAttribute("fill-opacity", e1.o.v);
        }
        function i1(t1, e1, r1) {
            s1(t1, e1, r1), a1(t1, e1, r1);
        }
        function s1(t1, e1, r1) {
            var i1, s1, a1, n1, o1, h1 = e1.gf, l1 = e1.g._hasOpacity, p1 = e1.s.v, f1 = e1.e.v;
            if (e1.o._mdf || r1) {
                var m1 = "gf" === t1.ty ? "fill-opacity" : "stroke-opacity";
                e1.style.pElem.setAttribute(m1, e1.o.v);
            }
            if (e1.s._mdf || r1) {
                var c1 = 1 === t1.t ? "x1" : "cx", d1 = "x1" === c1 ? "y1" : "cy";
                h1.setAttribute(c1, p1[0]), h1.setAttribute(d1, p1[1]), l1 && !e1.g._collapsable && (e1.of.setAttribute(c1, p1[0]), e1.of.setAttribute(d1, p1[1]));
            }
            if (e1.g._cmdf || r1) {
                i1 = e1.cst;
                var u1 = e1.g.c;
                for(a1 = i1.length, s1 = 0; s1 < a1; s1 += 1)(n1 = i1[s1]).setAttribute("offset", u1[4 * s1] + "%"), n1.setAttribute("stop-color", "rgb(" + u1[4 * s1 + 1] + "," + u1[4 * s1 + 2] + "," + u1[4 * s1 + 3] + ")");
            }
            if (l1 && (e1.g._omdf || r1)) {
                var y1 = e1.g.o;
                for(a1 = (i1 = e1.g._collapsable ? e1.cst : e1.ost).length, s1 = 0; s1 < a1; s1 += 1)n1 = i1[s1], e1.g._collapsable || n1.setAttribute("offset", y1[2 * s1] + "%"), n1.setAttribute("stop-opacity", y1[2 * s1 + 1]);
            }
            if (1 === t1.t) (e1.e._mdf || r1) && (h1.setAttribute("x2", f1[0]), h1.setAttribute("y2", f1[1]), l1 && !e1.g._collapsable && (e1.of.setAttribute("x2", f1[0]), e1.of.setAttribute("y2", f1[1])));
            else if ((e1.s._mdf || e1.e._mdf || r1) && (o1 = Math.sqrt(Math.pow(p1[0] - f1[0], 2) + Math.pow(p1[1] - f1[1], 2)), h1.setAttribute("r", o1), l1 && !e1.g._collapsable && e1.of.setAttribute("r", o1)), e1.e._mdf || e1.h._mdf || e1.a._mdf || r1) {
                o1 || (o1 = Math.sqrt(Math.pow(p1[0] - f1[0], 2) + Math.pow(p1[1] - f1[1], 2)));
                var g1 = Math.atan2(f1[1] - p1[1], f1[0] - p1[0]), v1 = o1 * (1 <= e1.h.v ? .99 : e1.h.v <= -1 ? -0.99 : e1.h.v), b1 = Math.cos(g1 + e1.a.v) * v1 + p1[0], E1 = Math.sin(g1 + e1.a.v) * v1 + p1[1];
                h1.setAttribute("fx", b1), h1.setAttribute("fy", E1), l1 && !e1.g._collapsable && (e1.of.setAttribute("fx", b1), e1.of.setAttribute("fy", E1));
            }
        }
        function a1(t1, e1, r1) {
            var i1 = e1.style, s1 = e1.d;
            s1 && (s1._mdf || r1) && s1.dashStr && (i1.pElem.setAttribute("stroke-dasharray", s1.dashStr), i1.pElem.setAttribute("stroke-dashoffset", s1.dashoffset[0])), e1.c && (e1.c._mdf || r1) && i1.pElem.setAttribute("stroke", "rgb(" + bm_floor(e1.c.v[0]) + "," + bm_floor(e1.c.v[1]) + "," + bm_floor(e1.c.v[2]) + ")"), (e1.o._mdf || r1) && i1.pElem.setAttribute("stroke-opacity", e1.o.v), (e1.w._mdf || r1) && (i1.pElem.setAttribute("stroke-width", e1.w.v), i1.msElem && i1.msElem.setAttribute("stroke-width", e1.w.v));
        }
        var n1 = new Matrix, o1 = new Matrix;
        return {
            createRenderFunction: function(n1) {
                switch(n1.ty, n1.ty){
                    case "fl":
                        return r1;
                    case "gf":
                        return s1;
                    case "gs":
                        return i1;
                    case "st":
                        return a1;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return e1;
                    case "tr":
                        return t1;
                }
            }
        };
    }();
    ShapeTransformManager.prototype = {
        addTransformSequence: function(t1) {
            var e1, r1 = t1.length, i1 = "_";
            for(e1 = 0; e1 < r1; e1 += 1)i1 += t1[e1].transform.key + "_";
            var s1 = this.sequences[i1];
            return s1 || (s1 = {
                transforms: [].concat(t1),
                finalTransform: new Matrix,
                _mdf: !1
            }, this.sequences[i1] = s1, this.sequenceList.push(s1)), s1;
        },
        processSequence: function(t1, e1) {
            for(var r1, i1 = 0, s1 = t1.transforms.length, a1 = e1; i1 < s1 && !e1;){
                if (t1.transforms[i1].transform.mProps._mdf) {
                    a1 = !0;
                    break;
                }
                i1 += 1;
            }
            if (a1) for(t1.finalTransform.reset(), i1 = s1 - 1; 0 <= i1; i1 -= 1)r1 = t1.transforms[i1].transform.mProps.v.props, t1.finalTransform.transform(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5], r1[6], r1[7], r1[8], r1[9], r1[10], r1[11], r1[12], r1[13], r1[14], r1[15]);
            t1._mdf = a1;
        },
        processSequences: function(t1) {
            var e1, r1 = this.sequenceList.length;
            for(e1 = 0; e1 < r1; e1 += 1)this.processSequence(this.sequenceList[e1], t1);
        },
        getNewKey: function() {
            return "_" + this.transform_key_count++;
        }
    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
        checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for(var t1 = 0, e1 = this.data.masksProperties.length; t1 < e1;){
                if ("n" !== this.data.masksProperties[t1].mode && !1 !== this.data.masksProperties[t1].cl) return !0;
                t1 += 1;
            }
            return !1;
        },
        initExpressions: function() {
            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var t1 = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(t1), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
        },
        setBlendMode: function() {
            var t1 = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t1;
        },
        initBaseData: function(t1, e1, r1) {
            this.globalData = e1, this.comp = r1, this.data = t1, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        },
        getType: function() {
            return this.type;
        },
        sourceRectAtTime: function() {}
    }, NullElement.prototype.prepareFrame = function(t1) {
        this.prepareProperties(t1, !0);
    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
        return null;
    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([
        BaseElement,
        TransformElement,
        HierarchyElement,
        FrameElement
    ], NullElement), SVGBaseElement.prototype = {
        initRendererElement: function() {
            this.layerElement = createNS("g");
        },
        createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t1, e1, r1, i1 = null;
            if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                    var s1 = createNS("mask");
                    s1.setAttribute("id", this.layerId), s1.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s1.appendChild(this.layerElement), i1 = s1, this.globalData.defs.appendChild(s1), featureSupport.maskType || 1 != this.data.td || (s1.setAttribute("mask-type", "luminance"), t1 = createElementID(), e1 = filtersFactory.createFilter(t1), this.globalData.defs.appendChild(e1), e1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r1 = createNS("g")).appendChild(this.layerElement), i1 = r1, s1.appendChild(r1), r1.setAttribute("filter", "url(" + locationHref + "#" + t1 + ")"));
                } else if (2 == this.data.td) {
                    var a1 = createNS("mask");
                    a1.setAttribute("id", this.layerId), a1.setAttribute("mask-type", "alpha");
                    var n1 = createNS("g");
                    a1.appendChild(n1), t1 = createElementID(), e1 = filtersFactory.createFilter(t1);
                    var o1 = createNS("feComponentTransfer");
                    o1.setAttribute("in", "SourceGraphic"), e1.appendChild(o1);
                    var h1 = createNS("feFuncA");
                    h1.setAttribute("type", "table"), h1.setAttribute("tableValues", "1.0 0.0"), o1.appendChild(h1), this.globalData.defs.appendChild(e1);
                    var l1 = createNS("rect");
                    l1.setAttribute("width", this.comp.data.w), l1.setAttribute("height", this.comp.data.h), l1.setAttribute("x", "0"), l1.setAttribute("y", "0"), l1.setAttribute("fill", "#ffffff"), l1.setAttribute("opacity", "0"), n1.setAttribute("filter", "url(" + locationHref + "#" + t1 + ")"), n1.appendChild(l1), n1.appendChild(this.layerElement), i1 = n1, featureSupport.maskType || (a1.setAttribute("mask-type", "luminance"), e1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r1 = createNS("g"), n1.appendChild(l1), r1.appendChild(this.layerElement), i1 = r1, n1.appendChild(r1)), this.globalData.defs.appendChild(a1);
                }
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i1 = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                var p1 = createNS("clipPath"), f1 = createNS("path");
                f1.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                var m1 = createElementID();
                if (p1.setAttribute("id", m1), p1.appendChild(f1), this.globalData.defs.appendChild(p1), this.checkMasks()) {
                    var c1 = createNS("g");
                    c1.setAttribute("clip-path", "url(" + locationHref + "#" + m1 + ")"), c1.appendChild(this.layerElement), this.transformedElement = c1, i1 ? i1.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + m1 + ")");
            }
            0 !== this.data.bm && this.setBlendMode();
        },
        renderElement: function() {
            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
        },
        destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
        },
        getBaseElement: function() {
            return this.data.hd ? null : this.baseElement;
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
        },
        setMatte: function(t1) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t1 + ")");
        }
    }, IShapeElement.prototype = {
        addShapeToModifiers: function(t1) {
            var e1, r1 = this.shapeModifiers.length;
            for(e1 = 0; e1 < r1; e1 += 1)this.shapeModifiers[e1].addShape(t1);
        },
        isShapeInAnimatedModifiers: function(t1) {
            for(var e1 = this.shapeModifiers.length; 0 < e1;)if (this.shapeModifiers[0].isAnimatedWithShape(t1)) return !0;
            return !1;
        },
        renderModifiers: function() {
            if (this.shapeModifiers.length) {
                var t1, e1 = this.shapes.length;
                for(t1 = 0; t1 < e1; t1 += 1)this.shapes[t1].sh.reset();
                for(t1 = (e1 = this.shapeModifiers.length) - 1; 0 <= t1; t1 -= 1)this.shapeModifiers[t1].processShapes(this._isFirstFrame);
            }
        },
        lcEnum: {
            1: "butt",
            2: "round",
            3: "square"
        },
        ljEnum: {
            1: "miter",
            2: "round",
            3: "bevel"
        },
        searchProcessedElement: function(t1) {
            for(var e1 = this.processedElements, r1 = 0, i1 = e1.length; r1 < i1;){
                if (e1[r1].elem === t1) return e1[r1].pos;
                r1 += 1;
            }
            return 0;
        },
        addProcessedElement: function(t1, e1) {
            for(var r1 = this.processedElements, i1 = r1.length; i1;)if (r1[i1 -= 1].elem === t1) return void (r1[i1].pos = e1);
            r1.push(new ProcessedElement(t1, e1));
        },
        prepareFrame: function(t1) {
            this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange);
        }
    }, ITextElement.prototype.initElement = function(t1, e1, r1) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t1, e1, r1), this.textProperty = new TextProperty(this, t1.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t1.t, this.renderType, this), this.initTransform(t1, e1, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t1) {
        this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    }, ITextElement.prototype.createPathShape = function(t1, e1) {
        var r1, i1, s1 = e1.length, a1 = "";
        for(r1 = 0; r1 < s1; r1 += 1)i1 = e1[r1].ks.k, a1 += buildShapeString(i1, i1.i.length, !0, t1);
        return a1;
    }, ITextElement.prototype.updateDocumentData = function(t1, e1) {
        this.textProperty.updateDocumentData(t1, e1);
    }, ITextElement.prototype.canResizeFont = function(t1) {
        this.textProperty.canResizeFont(t1);
    }, ITextElement.prototype.setMinimumFontSize = function(t1) {
        this.textProperty.setMinimumFontSize(t1);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t1, e1, r1, i1, s1) {
        switch(t1.ps && e1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), e1.translate(0, -t1.ls, 0), t1.j){
            case 1:
                e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[r1]), 0, 0);
                break;
            case 2:
                e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[r1]) / 2, 0, 0);
        }
        e1.translate(i1, s1, 0);
    }, ITextElement.prototype.buildColor = function(t1) {
        return "rgb(" + Math.round(255 * t1[0]) + "," + Math.round(255 * t1[1]) + "," + Math.round(255 * t1[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([
        BaseElement,
        TransformElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], ICompElement), ICompElement.prototype.initElement = function(t1, e1, r1) {
        this.initFrame(), this.initBaseData(t1, e1, r1), this.initTransform(t1, e1, r1), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e1.progressiveLoad || this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t1) {
        if (this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t1 / this.data.sr;
            else {
                var e1 = this.tm.v;
                e1 === this.data.op && (e1 = this.data.op - 1), this.renderedFrame = e1;
            }
            var r1, i1 = this.elements.length;
            for(this.completeLayers || this.checkLayers(this.renderedFrame), r1 = i1 - 1; 0 <= r1; r1 -= 1)(this.completeLayers || this.elements[r1]) && (this.elements[r1].prepareFrame(this.renderedFrame - this.layers[r1].st), this.elements[r1]._mdf && (this._mdf = !0));
        }
    }, ICompElement.prototype.renderInnerContent = function() {
        var t1, e1 = this.layers.length;
        for(t1 = 0; t1 < e1; t1 += 1)(this.completeLayers || this.elements[t1]) && this.elements[t1].renderFrame();
    }, ICompElement.prototype.setElements = function(t1) {
        this.elements = t1;
    }, ICompElement.prototype.getElements = function() {
        return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
        var t1, e1 = this.layers.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy();
    }, ICompElement.prototype.destroy = function() {
        this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], IImageElement), IImageElement.prototype.createContent = function() {
        var t1 = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t1), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect;
    }, extendPrototype([
        IImageElement
    ], ISolidElement), ISolidElement.prototype.createContent = function() {
        var t1 = createNS("rect");
        t1.setAttribute("width", this.data.sw), t1.setAttribute("height", this.data.sh), t1.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t1);
    }, extendPrototype([
        SVGRenderer,
        ICompElement,
        SVGBaseElement
    ], SVGCompElement), extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement
    ], SVGTextElement), SVGTextElement.prototype.createContent = function() {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextElement.prototype.buildTextContents = function(t1) {
        for(var e1 = 0, r1 = t1.length, i1 = [], s1 = ""; e1 < r1;)t1[e1] === String.fromCharCode(13) || t1[e1] === String.fromCharCode(3) ? (i1.push(s1), s1 = "") : s1 += t1[e1], e1 += 1;
        return i1.push(s1), i1;
    }, SVGTextElement.prototype.buildNewText = function() {
        var t1, e1, r1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r1 ? r1.l.length : 0), r1.fc ? this.layerElement.setAttribute("fill", this.buildColor(r1.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r1.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r1.sc)), this.layerElement.setAttribute("stroke-width", r1.sw)), this.layerElement.setAttribute("font-size", r1.finalSize);
        var i1 = this.globalData.fontManager.getFontByName(r1.f);
        if (i1.fClass) this.layerElement.setAttribute("class", i1.fClass);
        else {
            this.layerElement.setAttribute("font-family", i1.fFamily);
            var s1 = r1.fWeight, a1 = r1.fStyle;
            this.layerElement.setAttribute("font-style", a1), this.layerElement.setAttribute("font-weight", s1);
        }
        this.layerElement.setAttribute("aria-label", r1.t);
        var n1, o1 = r1.l || [], h1 = !!this.globalData.fontManager.chars;
        e1 = o1.length;
        var l1, p1 = this.mHelper, f1 = "", m1 = this.data.singleShape, c1 = 0, d1 = 0, u1 = !0, y1 = r1.tr / 1e3 * r1.finalSize;
        if (!m1 || h1 || r1.sz) {
            var g1, v1, b1 = this.textSpans.length;
            for(t1 = 0; t1 < e1; t1 += 1)h1 && m1 && 0 !== t1 || (n1 = t1 < b1 ? this.textSpans[t1] : createNS(h1 ? "path" : "text"), b1 <= t1 && (n1.setAttribute("stroke-linecap", "butt"), n1.setAttribute("stroke-linejoin", "round"), n1.setAttribute("stroke-miterlimit", "4"), this.textSpans[t1] = n1, this.layerElement.appendChild(n1)), n1.style.display = "inherit"), p1.reset(), p1.scale(r1.finalSize / 100, r1.finalSize / 100), m1 && (o1[t1].n && (c1 = -y1, d1 += r1.yOffset, d1 += u1 ? 1 : 0, u1 = !1), this.applyTextPropertiesToMatrix(r1, p1, o1[t1].line, c1, d1), c1 += o1[t1].l || 0, c1 += y1), h1 ? (l1 = (g1 = (v1 = this.globalData.fontManager.getCharData(r1.finalText[t1], i1.fStyle, this.globalData.fontManager.getFontByName(r1.f).fFamily)) && v1.data || {}).shapes ? g1.shapes[0].it : [], m1 ? f1 += this.createPathShape(p1, l1) : n1.setAttribute("d", this.createPathShape(p1, l1))) : (m1 && n1.setAttribute("transform", "translate(" + p1.props[12] + "," + p1.props[13] + ")"), n1.textContent = o1[t1].val, n1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
            m1 && n1 && n1.setAttribute("d", f1);
        } else {
            var E1 = this.textContainer, x1 = "start";
            switch(r1.j){
                case 1:
                    x1 = "end";
                    break;
                case 2:
                    x1 = "middle";
            }
            E1.setAttribute("text-anchor", x1), E1.setAttribute("letter-spacing", y1);
            var P1 = this.buildTextContents(r1.finalText);
            for(e1 = P1.length, d1 = r1.ps ? r1.ps[1] + r1.ascent : 0, t1 = 0; t1 < e1; t1 += 1)(n1 = this.textSpans[t1] || createNS("tspan")).textContent = P1[t1], n1.setAttribute("x", 0), n1.setAttribute("y", d1), n1.style.display = "inherit", E1.appendChild(n1), this.textSpans[t1] = n1, d1 += r1.finalLineHeight;
            this.layerElement.appendChild(E1);
        }
        for(; t1 < this.textSpans.length;)this.textSpans[t1].style.display = "none", t1 += 1;
        this._sizeChanged = !0;
    }, SVGTextElement.prototype.sourceRectAtTime = function(t1) {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e1 = this.layerElement.getBBox();
            this.bbox = {
                top: e1.y,
                left: e1.x,
                width: e1.width,
                height: e1.height
            };
        }
        return this.bbox;
    }, SVGTextElement.prototype.renderInnerContent = function() {
        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t1, e1;
            this._sizeChanged = !0;
            var r1, i1, s1 = this.textAnimator.renderedLetters, a1 = this.textProperty.currentData.l;
            for(e1 = a1.length, t1 = 0; t1 < e1; t1 += 1)a1[t1].n || (r1 = s1[t1], i1 = this.textSpans[t1], r1._mdf.m && i1.setAttribute("transform", r1.m), r1._mdf.o && i1.setAttribute("opacity", r1.o), r1._mdf.sw && i1.setAttribute("stroke-width", r1.sw), r1._mdf.sc && i1.setAttribute("stroke", r1.sc), r1._mdf.fc && i1.setAttribute("fill", r1.fc));
        }
    }, extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
        var t1, e1, r1, i1, s1 = this.shapes.length, a1 = this.stylesList.length, n1 = [], o1 = !1;
        for(r1 = 0; r1 < a1; r1 += 1){
            for(i1 = this.stylesList[r1], o1 = !1, t1 = n1.length = 0; t1 < s1; t1 += 1)-1 !== (e1 = this.shapes[t1]).styles.indexOf(i1) && (n1.push(e1), o1 = e1._isAnimated || o1);
            1 < n1.length && o1 && this.setShapesAsAnimated(n1);
        }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t1) {
        var e1, r1 = t1.length;
        for(e1 = 0; e1 < r1; e1 += 1)t1[e1].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t1, e1) {
        var r1, i1 = new SVGStyleData(t1, e1), s1 = i1.pElem;
        return "st" === t1.ty ? r1 = new SVGStrokeStyleData(this, t1, i1) : "fl" === t1.ty ? r1 = new SVGFillStyleData(this, t1, i1) : "gf" !== t1.ty && "gs" !== t1.ty || (r1 = new ("gf" === t1.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t1, i1), this.globalData.defs.appendChild(r1.gf), r1.maskId && (this.globalData.defs.appendChild(r1.ms), this.globalData.defs.appendChild(r1.of), s1.setAttribute("mask", "url(" + locationHref + "#" + r1.maskId + ")"))), "st" !== t1.ty && "gs" !== t1.ty || (s1.setAttribute("stroke-linecap", this.lcEnum[t1.lc] || "round"), s1.setAttribute("stroke-linejoin", this.ljEnum[t1.lj] || "round"), s1.setAttribute("fill-opacity", "0"), 1 === t1.lj && s1.setAttribute("stroke-miterlimit", t1.ml)), 2 === t1.r && s1.setAttribute("fill-rule", "evenodd"), t1.ln && s1.setAttribute("id", t1.ln), t1.cl && s1.setAttribute("class", t1.cl), t1.bm && (s1.style["mix-blend-mode"] = getBlendMode(t1.bm)), this.stylesList.push(i1), this.addToAnimatedContents(t1, r1), r1;
    }, SVGShapeElement.prototype.createGroupElement = function(t1) {
        var e1 = new ShapeGroupData;
        return t1.ln && e1.gr.setAttribute("id", t1.ln), t1.cl && e1.gr.setAttribute("class", t1.cl), t1.bm && (e1.gr.style["mix-blend-mode"] = getBlendMode(t1.bm)), e1;
    }, SVGShapeElement.prototype.createTransformElement = function(t1, e1) {
        var r1 = TransformPropertyFactory.getTransformProperty(this, t1, this), i1 = new SVGTransformData(r1, r1.o, e1);
        return this.addToAnimatedContents(t1, i1), i1;
    }, SVGShapeElement.prototype.createShapeElement = function(t1, e1, r1) {
        var i1 = 4;
        "rc" === t1.ty ? i1 = 5 : "el" === t1.ty ? i1 = 6 : "sr" === t1.ty && (i1 = 7);
        var s1 = new SVGShapeData(e1, r1, ShapePropertyFactory.getShapeProp(this, t1, i1, this));
        return this.shapes.push(s1), this.addShapeToModifiers(s1), this.addToAnimatedContents(t1, s1), s1;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t1, e1) {
        for(var r1 = 0, i1 = this.animatedContents.length; r1 < i1;){
            if (this.animatedContents[r1].element === e1) return;
            r1 += 1;
        }
        this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t1),
            element: e1,
            data: t1
        });
    }, SVGShapeElement.prototype.setElementStyles = function(t1) {
        var e1, r1 = t1.styles, i1 = this.stylesList.length;
        for(e1 = 0; e1 < i1; e1 += 1)this.stylesList[e1].closed || r1.push(this.stylesList[e1]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t1, e1 = this.itemsData.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.prevViewData[t1] = this.itemsData[t1];
        for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e1 = this.dynamicProperties.length, t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue();
        this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t1, e1, r1, i1, s1, a1, n1) {
        var o1, h1, l1, p1, f1, m1, c1 = [].concat(a1), d1 = t1.length - 1, u1 = [], y1 = [];
        for(o1 = d1; 0 <= o1; o1 -= 1){
            if ((m1 = this.searchProcessedElement(t1[o1])) ? e1[o1] = r1[m1 - 1] : t1[o1]._render = n1, "fl" == t1[o1].ty || "st" == t1[o1].ty || "gf" == t1[o1].ty || "gs" == t1[o1].ty) m1 ? e1[o1].style.closed = !1 : e1[o1] = this.createStyleElement(t1[o1], s1), t1[o1]._render && i1.appendChild(e1[o1].style.pElem), u1.push(e1[o1].style);
            else if ("gr" == t1[o1].ty) {
                if (m1) for(l1 = e1[o1].it.length, h1 = 0; h1 < l1; h1 += 1)e1[o1].prevViewData[h1] = e1[o1].it[h1];
                else e1[o1] = this.createGroupElement(t1[o1]);
                this.searchShapes(t1[o1].it, e1[o1].it, e1[o1].prevViewData, e1[o1].gr, s1 + 1, c1, n1), t1[o1]._render && i1.appendChild(e1[o1].gr);
            } else "tr" == t1[o1].ty ? (m1 || (e1[o1] = this.createTransformElement(t1[o1], i1)), p1 = e1[o1].transform, c1.push(p1)) : "sh" == t1[o1].ty || "rc" == t1[o1].ty || "el" == t1[o1].ty || "sr" == t1[o1].ty ? (m1 || (e1[o1] = this.createShapeElement(t1[o1], c1, s1)), this.setElementStyles(e1[o1])) : "tm" == t1[o1].ty || "rd" == t1[o1].ty || "ms" == t1[o1].ty || "pb" == t1[o1].ty ? (m1 ? (f1 = e1[o1]).closed = !1 : ((f1 = ShapeModifiers.getModifier(t1[o1].ty)).init(this, t1[o1]), e1[o1] = f1, this.shapeModifiers.push(f1)), y1.push(f1)) : "rp" == t1[o1].ty && (m1 ? (f1 = e1[o1]).closed = !0 : (f1 = ShapeModifiers.getModifier(t1[o1].ty), (e1[o1] = f1).init(this, t1, o1, e1), this.shapeModifiers.push(f1), n1 = !1), y1.push(f1));
            this.addProcessedElement(t1[o1], o1 + 1);
        }
        for(d1 = u1.length, o1 = 0; o1 < d1; o1 += 1)u1[o1].closed = !0;
        for(d1 = y1.length, o1 = 0; o1 < d1; o1 += 1)y1[o1].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var t1, e1 = this.stylesList.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.stylesList[t1].reset();
        for(this.renderShape(), t1 = 0; t1 < e1; t1 += 1)(this.stylesList[t1]._mdf || this._isFirstFrame) && (this.stylesList[t1].msElem && (this.stylesList[t1].msElem.setAttribute("d", this.stylesList[t1].d), this.stylesList[t1].d = "M0 0" + this.stylesList[t1].d), this.stylesList[t1].pElem.setAttribute("d", this.stylesList[t1].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
        var t1, e1, r1 = this.animatedContents.length;
        for(t1 = 0; t1 < r1; t1 += 1)e1 = this.animatedContents[t1], (this._isFirstFrame || e1.element._isAnimated) && !0 !== e1.data && e1.fn(e1.data, e1.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, SVGTintFilter.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            var e1 = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i1 = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", r1[0] - e1[0] + " 0 0 0 " + e1[0] + " " + (r1[1] - e1[1]) + " 0 0 0 " + e1[1] + " " + (r1[2] - e1[2]) + " 0 0 0 " + e1[2] + " 0 0 0 " + i1 + " 0");
        }
    }, SVGFillFilter.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            var e1 = this.filterManager.effectElements[2].p.v, r1 = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e1[0] + " 0 0 0 0 " + e1[1] + " 0 0 0 0 " + e1[2] + " 0 0 0 " + r1 + " 0");
        }
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            var e1 = .3 * this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i1 = 3 == r1 ? 0 : e1, s1 = 2 == r1 ? 0 : e1;
            this.feGaussianBlur.setAttribute("stdDeviation", i1 + " " + s1);
            var a1 = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a1);
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t1, e1, r1, i1, s1 = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for(1 === this.filterManager.effectElements[1].p.v ? (i1 = this.elem.maskManager.masksProperties.length, r1 = 0) : i1 = 1 + (r1 = this.filterManager.effectElements[0].p.v - 1), (e1 = createNS("g")).setAttribute("fill", "none"), e1.setAttribute("stroke-linecap", "round"), e1.setAttribute("stroke-dashoffset", 1); r1 < i1; r1 += 1)t1 = createNS("path"), e1.appendChild(t1), this.paths.push({
            p: t1,
            m: r1
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a1 = createNS("mask"), n1 = createElementID();
            a1.setAttribute("id", n1), a1.setAttribute("mask-type", "alpha"), a1.appendChild(e1), this.elem.globalData.defs.appendChild(a1);
            var o1 = createNS("g");
            for(o1.setAttribute("mask", "url(" + locationHref + "#" + n1 + ")"); s1[0];)o1.appendChild(s1[0]);
            this.elem.layerElement.appendChild(o1), this.masker = a1, e1.setAttribute("stroke", "#fff");
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v) for(s1 = this.elem.layerElement.children || this.elem.layerElement.childNodes; s1.length;)this.elem.layerElement.removeChild(s1[0]);
            this.elem.layerElement.appendChild(e1), this.elem.layerElement.removeAttribute("mask"), e1.setAttribute("stroke", "#fff");
        }
        this.initialized = !0, this.pathMasker = e1;
    }, SVGStrokeEffect.prototype.renderFrame = function(t1) {
        this.initialized || this.initialize();
        var e1, r1, i1, s1 = this.paths.length;
        for(e1 = 0; e1 < s1; e1 += 1)if (-1 !== this.paths[e1].m && (r1 = this.elem.maskManager.viewData[this.paths[e1].m], i1 = this.paths[e1].p, (t1 || this.filterManager._mdf || r1.prop._mdf) && i1.setAttribute("d", r1.lastPath), t1 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r1.prop._mdf)) {
            var a1;
            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var n1 = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, o1 = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, h1 = i1.getTotalLength();
                a1 = "0 0 0 " + h1 * n1 + " ";
                var l1, p1 = h1 * (o1 - n1), f1 = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100, m1 = Math.floor(p1 / f1);
                for(l1 = 0; l1 < m1; l1 += 1)a1 += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                a1 += "0 " + 10 * h1 + " 0 0";
            } else a1 = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
            i1.setAttribute("stroke-dasharray", a1);
        }
        if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t1 || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t1 || this.filterManager.effectElements[3].p._mdf)) {
            var c1 = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c1[0]) + "," + bm_floor(255 * c1[1]) + "," + bm_floor(255 * c1[2]) + ")");
        }
    }, SVGTritoneFilter.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            var e1 = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i1 = this.filterManager.effectElements[2].p.v, s1 = i1[0] + " " + r1[0] + " " + e1[0], a1 = i1[1] + " " + r1[1] + " " + e1[1], n1 = i1[2] + " " + r1[2] + " " + e1[2];
            this.feFuncR.setAttribute("tableValues", s1), this.feFuncG.setAttribute("tableValues", a1), this.feFuncB.setAttribute("tableValues", n1);
        }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t1, e1) {
        var r1 = createNS(t1);
        return r1.setAttribute("type", "table"), e1.appendChild(r1), r1;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t1, e1, r1, i1, s1) {
        for(var a1, n1, o1 = 0, h1 = Math.min(t1, e1), l1 = Math.max(t1, e1), p1 = Array.call(null, {
            length: 256
        }), f1 = 0, m1 = s1 - i1, c1 = e1 - t1; o1 <= 256;)n1 = (a1 = o1 / 256) <= h1 ? c1 < 0 ? s1 : i1 : l1 <= a1 ? c1 < 0 ? i1 : s1 : i1 + m1 * Math.pow((a1 - t1) / c1, 1 / r1), p1[f1++] = n1, o1 += 256 / 255;
        return p1.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            var e1, r1 = this.filterManager.effectElements;
            this.feFuncRComposed && (t1 || r1[3].p._mdf || r1[4].p._mdf || r1[5].p._mdf || r1[6].p._mdf || r1[7].p._mdf) && (e1 = this.getTableValue(r1[3].p.v, r1[4].p.v, r1[5].p.v, r1[6].p.v, r1[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e1), this.feFuncGComposed.setAttribute("tableValues", e1), this.feFuncBComposed.setAttribute("tableValues", e1)), this.feFuncR && (t1 || r1[10].p._mdf || r1[11].p._mdf || r1[12].p._mdf || r1[13].p._mdf || r1[14].p._mdf) && (e1 = this.getTableValue(r1[10].p.v, r1[11].p.v, r1[12].p.v, r1[13].p.v, r1[14].p.v), this.feFuncR.setAttribute("tableValues", e1)), this.feFuncG && (t1 || r1[17].p._mdf || r1[18].p._mdf || r1[19].p._mdf || r1[20].p._mdf || r1[21].p._mdf) && (e1 = this.getTableValue(r1[17].p.v, r1[18].p.v, r1[19].p.v, r1[20].p.v, r1[21].p.v), this.feFuncG.setAttribute("tableValues", e1)), this.feFuncB && (t1 || r1[24].p._mdf || r1[25].p._mdf || r1[26].p._mdf || r1[27].p._mdf || r1[28].p._mdf) && (e1 = this.getTableValue(r1[24].p.v, r1[25].p.v, r1[26].p.v, r1[27].p.v, r1[28].p.v), this.feFuncB.setAttribute("tableValues", e1)), this.feFuncA && (t1 || r1[31].p._mdf || r1[32].p._mdf || r1[33].p._mdf || r1[34].p._mdf || r1[35].p._mdf) && (e1 = this.getTableValue(r1[31].p.v, r1[32].p.v, r1[33].p.v, r1[34].p.v, r1[35].p.v), this.feFuncA.setAttribute("tableValues", e1));
        }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t1) {
        if (t1 || this.filterManager._mdf) {
            if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t1 || this.filterManager.effectElements[0].p._mdf) {
                var e1 = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e1[0]), Math.round(255 * e1[1]), Math.round(255 * e1[2])));
            }
            if ((t1 || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t1 || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var r1 = this.filterManager.effectElements[3].p.v, i1 = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s1 = r1 * Math.cos(i1), a1 = r1 * Math.sin(i1);
                this.feOffset.setAttribute("dx", s1), this.feOffset.setAttribute("dy", a1);
            }
        }
    };
    var _svgMatteSymbols = [];
    SVGMatte3Effect.prototype.findSymbol = function(t1) {
        for(var e1 = 0, r1 = _svgMatteSymbols.length; e1 < r1;){
            if (_svgMatteSymbols[e1] === t1) return _svgMatteSymbols[e1];
            e1 += 1;
        }
        return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t1, e1) {
        var r1 = t1.layerElement.parentNode;
        if (r1) {
            for(var i1, s1 = r1.children, a1 = 0, n1 = s1.length; a1 < n1 && s1[a1] !== t1.layerElement;)a1 += 1;
            a1 <= n1 - 2 && (i1 = s1[a1 + 1]);
            var o1 = createNS("use");
            o1.setAttribute("href", "#" + e1), i1 ? r1.insertBefore(o1, i1) : r1.appendChild(o1);
        }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t1, e1) {
        if (!this.findSymbol(e1)) {
            var r1 = createElementID(), i1 = createNS("mask");
            i1.setAttribute("id", e1.layerId), i1.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e1);
            var s1 = t1.globalData.defs;
            s1.appendChild(i1);
            var a1 = createNS("symbol");
            a1.setAttribute("id", r1), this.replaceInParent(e1, r1), a1.appendChild(e1.layerElement), s1.appendChild(a1);
            var n1 = createNS("use");
            n1.setAttribute("href", "#" + r1), i1.appendChild(n1), e1.data.hd = !1, e1.show();
        }
        t1.setMatte(e1.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
        for(var t1 = this.filterManager.effectElements[0].p.v, e1 = this.elem.comp.elements, r1 = 0, i1 = e1.length; r1 < i1;)e1[r1] && e1[r1].data.ind === t1 && this.setElementAsMask(this.elem, e1[r1]), r1 += 1;
        this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize();
    }, SVGEffects.prototype.renderFrame = function(t1) {
        var e1, r1 = this.filters.length;
        for(e1 = 0; e1 < r1; e1 += 1)this.filters[e1].renderFrame(t1);
    }, CVContextData.prototype.duplicate = function() {
        var t1 = 2 * this._length, e1 = this.savedOp;
        this.savedOp = createTypedArray("float32", t1), this.savedOp.set(e1);
        var r1 = 0;
        for(r1 = this._length; r1 < t1; r1 += 1)this.saved[r1] = createTypedArray("float32", 16);
        this._length = t1;
    }, CVContextData.prototype.reset = function() {
        this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
    }, CVBaseElement.prototype = {
        createElements: function() {},
        initRendererElement: function() {},
        createContainerElements: function() {
            this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
        },
        createContent: function() {},
        setBlendMode: function() {
            var t1 = this.globalData;
            if (t1.blendMode !== this.data.bm) {
                t1.blendMode = this.data.bm;
                var e1 = getBlendMode(this.data.bm);
                t1.canvasContext.globalCompositeOperation = e1;
            }
        },
        createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this);
        },
        hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
        },
        showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
        },
        renderFrame: function() {
            if (!this.hidden && !this.data.hd) {
                this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                var t1 = 0 === this.data.ty;
                this.globalData.renderer.save(t1), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t1), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
            }
        },
        destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
        },
        mHelper: new Matrix
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t1 = createTag("canvas");
            t1.width = this.assetData.w, t1.height = this.assetData.h;
            var e1, r1, i1 = t1.getContext("2d"), s1 = this.img.width, a1 = this.img.height, n1 = s1 / a1, o1 = this.assetData.w / this.assetData.h, h1 = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            o1 < n1 && "xMidYMid slice" === h1 || n1 < o1 && "xMidYMid slice" !== h1 ? e1 = (r1 = a1) * o1 : r1 = (e1 = s1) / o1, i1.drawImage(this.img, (s1 - e1) / 2, (a1 - r1) / 2, e1, r1, 0, 0, this.assetData.w, this.assetData.h), this.img = t1;
        }
    }, CVImageElement.prototype.renderInnerContent = function(t1) {
        this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
        this.img = null;
    }, extendPrototype([
        CanvasRenderer,
        ICompElement,
        CVBaseElement
    ], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
        var t1, e1 = this.canvasContext;
        for(e1.beginPath(), e1.moveTo(0, 0), e1.lineTo(this.data.w, 0), e1.lineTo(this.data.w, this.data.h), e1.lineTo(0, this.data.h), e1.lineTo(0, 0), e1.clip(), t1 = this.layers.length - 1; 0 <= t1; t1 -= 1)(this.completeLayers || this.elements[t1]) && this.elements[t1].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
        var t1;
        for(t1 = this.layers.length - 1; 0 <= t1; t1 -= 1)this.elements[t1] && this.elements[t1].destroy();
        this.layers = null, this.elements = null;
    }, CVMaskElement.prototype.renderFrame = function() {
        if (this.hasMasks) {
            var t1, e1, r1, i1, s1 = this.element.finalTransform.mat, a1 = this.element.canvasContext, n1 = this.masksProperties.length;
            for(a1.beginPath(), t1 = 0; t1 < n1; t1++)if ("n" !== this.masksProperties[t1].mode) {
                this.masksProperties[t1].inv && (a1.moveTo(0, 0), a1.lineTo(this.element.globalData.compSize.w, 0), a1.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a1.lineTo(0, this.element.globalData.compSize.h), a1.lineTo(0, 0)), i1 = this.viewData[t1].v, e1 = s1.applyToPointArray(i1.v[0][0], i1.v[0][1], 0), a1.moveTo(e1[0], e1[1]);
                var o1, h1 = i1._length;
                for(o1 = 1; o1 < h1; o1++)r1 = s1.applyToTriplePoints(i1.o[o1 - 1], i1.i[o1], i1.v[o1]), a1.bezierCurveTo(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5]);
                r1 = s1.applyToTriplePoints(i1.o[o1 - 1], i1.i[0], i1.v[0]), a1.bezierCurveTo(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5]);
            }
            this.element.globalData.renderer.save(!0), a1.clip();
        }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
        this.element = null;
    }, extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(t1, e1) {
        var r1 = {
            data: t1,
            type: t1.ty,
            preTransforms: this.transformsManager.addTransformSequence(e1),
            transforms: [],
            elements: [],
            closed: !0 === t1.hd
        }, i1 = {};
        if ("fl" == t1.ty || "st" == t1.ty ? (i1.c = PropertyFactory.getProp(this, t1.c, 1, 255, this), i1.c.k || (r1.co = "rgb(" + bm_floor(i1.c.v[0]) + "," + bm_floor(i1.c.v[1]) + "," + bm_floor(i1.c.v[2]) + ")")) : "gf" !== t1.ty && "gs" !== t1.ty || (i1.s = PropertyFactory.getProp(this, t1.s, 1, null, this), i1.e = PropertyFactory.getProp(this, t1.e, 1, null, this), i1.h = PropertyFactory.getProp(this, t1.h || {
            k: 0
        }, 0, .01, this), i1.a = PropertyFactory.getProp(this, t1.a || {
            k: 0
        }, 0, degToRads, this), i1.g = new GradientProperty(this, t1.g, this)), i1.o = PropertyFactory.getProp(this, t1.o, 0, .01, this), "st" == t1.ty || "gs" == t1.ty) {
            if (r1.lc = this.lcEnum[t1.lc] || "round", r1.lj = this.ljEnum[t1.lj] || "round", 1 == t1.lj && (r1.ml = t1.ml), i1.w = PropertyFactory.getProp(this, t1.w, 0, null, this), i1.w.k || (r1.wi = i1.w.v), t1.d) {
                var s1 = new DashProperty(this, t1.d, "canvas", this);
                i1.d = s1, i1.d.k || (r1.da = i1.d.dashArray, r1.do = i1.d.dashoffset[0]);
            }
        } else r1.r = 2 === t1.r ? "evenodd" : "nonzero";
        return this.stylesList.push(r1), i1.style = r1, i1;
    }, CVShapeElement.prototype.createGroupElement = function(t1) {
        return {
            it: [],
            prevViewData: []
        };
    }, CVShapeElement.prototype.createTransformElement = function(t1) {
        return {
            transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t1.o, 0, .01, this),
                mProps: TransformPropertyFactory.getTransformProperty(this, t1, this)
            }
        };
    }, CVShapeElement.prototype.createShapeElement = function(t1) {
        var e1 = new CVShapeData(this, t1, this.stylesList, this.transformsManager);
        return this.shapes.push(e1), this.addShapeToModifiers(e1), e1;
    }, CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t1, e1 = this.itemsData.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.prevViewData[t1] = this.itemsData[t1];
        for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e1 = this.dynamicProperties.length, t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t1) {
        var e1, r1 = this.stylesList.length;
        for(e1 = 0; e1 < r1; e1 += 1)this.stylesList[e1].closed || this.stylesList[e1].transforms.push(t1);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var t1, e1 = this.stylesList.length;
        for(t1 = 0; t1 < e1; t1 += 1)this.stylesList[t1].closed || this.stylesList[t1].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t1) {
        var e1, r1 = t1.length;
        for(e1 = 0; e1 < r1; e1 += 1)t1[e1].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(t1, e1, r1, i1, s1) {
        var a1, n1, o1, h1, l1, p1, f1 = t1.length - 1, m1 = [], c1 = [], d1 = [].concat(s1);
        for(a1 = f1; 0 <= a1; a1 -= 1){
            if ((h1 = this.searchProcessedElement(t1[a1])) ? e1[a1] = r1[h1 - 1] : t1[a1]._shouldRender = i1, "fl" == t1[a1].ty || "st" == t1[a1].ty || "gf" == t1[a1].ty || "gs" == t1[a1].ty) h1 ? e1[a1].style.closed = !1 : e1[a1] = this.createStyleElement(t1[a1], d1), m1.push(e1[a1].style);
            else if ("gr" == t1[a1].ty) {
                if (h1) for(o1 = e1[a1].it.length, n1 = 0; n1 < o1; n1 += 1)e1[a1].prevViewData[n1] = e1[a1].it[n1];
                else e1[a1] = this.createGroupElement(t1[a1]);
                this.searchShapes(t1[a1].it, e1[a1].it, e1[a1].prevViewData, i1, d1);
            } else "tr" == t1[a1].ty ? (h1 || (p1 = this.createTransformElement(t1[a1]), e1[a1] = p1), d1.push(e1[a1]), this.addTransformToStyleList(e1[a1])) : "sh" == t1[a1].ty || "rc" == t1[a1].ty || "el" == t1[a1].ty || "sr" == t1[a1].ty ? h1 || (e1[a1] = this.createShapeElement(t1[a1])) : "tm" == t1[a1].ty || "rd" == t1[a1].ty || "pb" == t1[a1].ty ? (h1 ? (l1 = e1[a1]).closed = !1 : ((l1 = ShapeModifiers.getModifier(t1[a1].ty)).init(this, t1[a1]), e1[a1] = l1, this.shapeModifiers.push(l1)), c1.push(l1)) : "rp" == t1[a1].ty && (h1 ? (l1 = e1[a1]).closed = !0 : (l1 = ShapeModifiers.getModifier(t1[a1].ty), (e1[a1] = l1).init(this, t1, a1, e1), this.shapeModifiers.push(l1), i1 = !1), c1.push(l1));
            this.addProcessedElement(t1[a1], a1 + 1);
        }
        for(this.removeTransformFromStyleList(), this.closeStyles(m1), f1 = c1.length, a1 = 0; a1 < f1; a1 += 1)c1[a1].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(t1, e1) {
        (t1._opMdf || e1.op._mdf || this._isFirstFrame) && (e1.opacity = t1.opacity, e1.opacity *= e1.op.v, e1._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
        var t1, e1, r1, i1, s1, a1, n1, o1, h1, l1 = this.stylesList.length, p1 = this.globalData.renderer, f1 = this.globalData.canvasContext;
        for(t1 = 0; t1 < l1; t1 += 1)if (("st" !== (o1 = (h1 = this.stylesList[t1]).type) && "gs" !== o1 || 0 !== h1.wi) && h1.data._shouldRender && 0 !== h1.coOp && 0 !== this.globalData.currentGlobalAlpha) {
            for(p1.save(), a1 = h1.elements, "st" === o1 || "gs" === o1 ? (f1.strokeStyle = "st" === o1 ? h1.co : h1.grd, f1.lineWidth = h1.wi, f1.lineCap = h1.lc, f1.lineJoin = h1.lj, f1.miterLimit = h1.ml || 0) : f1.fillStyle = "fl" === o1 ? h1.co : h1.grd, p1.ctxOpacity(h1.coOp), "st" !== o1 && "gs" !== o1 && f1.beginPath(), p1.ctxTransform(h1.preTransforms.finalTransform.props), r1 = a1.length, e1 = 0; e1 < r1; e1 += 1){
                for("st" !== o1 && "gs" !== o1 || (f1.beginPath(), h1.da && (f1.setLineDash(h1.da), f1.lineDashOffset = h1.do)), s1 = (n1 = a1[e1].trNodes).length, i1 = 0; i1 < s1; i1 += 1)"m" == n1[i1].t ? f1.moveTo(n1[i1].p[0], n1[i1].p[1]) : "c" == n1[i1].t ? f1.bezierCurveTo(n1[i1].pts[0], n1[i1].pts[1], n1[i1].pts[2], n1[i1].pts[3], n1[i1].pts[4], n1[i1].pts[5]) : f1.closePath();
                "st" !== o1 && "gs" !== o1 || (f1.stroke(), h1.da && f1.setLineDash(this.dashResetter));
            }
            "st" !== o1 && "gs" !== o1 && f1.fill(h1.r), p1.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(t1, e1, r1, i1) {
        var s1, a1;
        for(a1 = t1, s1 = e1.length - 1; 0 <= s1; s1 -= 1)"tr" == e1[s1].ty ? (a1 = r1[s1].transform, this.renderShapeTransform(t1, a1)) : "sh" == e1[s1].ty || "el" == e1[s1].ty || "rc" == e1[s1].ty || "sr" == e1[s1].ty ? this.renderPath(e1[s1], r1[s1]) : "fl" == e1[s1].ty ? this.renderFill(e1[s1], r1[s1], a1) : "st" == e1[s1].ty ? this.renderStroke(e1[s1], r1[s1], a1) : "gf" == e1[s1].ty || "gs" == e1[s1].ty ? this.renderGradientFill(e1[s1], r1[s1], a1) : "gr" == e1[s1].ty ? this.renderShape(a1, e1[s1].it, r1[s1].it) : e1[s1].ty;
        i1 && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t1, e1) {
        if (this._isFirstFrame || e1._mdf || t1.transforms._mdf) {
            var r1, i1, s1, a1 = t1.trNodes, n1 = e1.paths, o1 = n1._length;
            a1.length = 0;
            var h1 = t1.transforms.finalTransform;
            for(s1 = 0; s1 < o1; s1 += 1){
                var l1 = n1.shapes[s1];
                if (l1 && l1.v) {
                    for(i1 = l1._length, r1 = 1; r1 < i1; r1 += 1)1 === r1 && a1.push({
                        t: "m",
                        p: h1.applyToPointArray(l1.v[0][0], l1.v[0][1], 0)
                    }), a1.push({
                        t: "c",
                        pts: h1.applyToTriplePoints(l1.o[r1 - 1], l1.i[r1], l1.v[r1])
                    });
                    1 === i1 && a1.push({
                        t: "m",
                        p: h1.applyToPointArray(l1.v[0][0], l1.v[0][1], 0)
                    }), l1.c && i1 && (a1.push({
                        t: "c",
                        pts: h1.applyToTriplePoints(l1.o[r1 - 1], l1.i[0], l1.v[0])
                    }), a1.push({
                        t: "z"
                    }));
                }
            }
            t1.trNodes = a1;
        }
    }, CVShapeElement.prototype.renderPath = function(t1, e1) {
        if (!0 !== t1.hd && t1._shouldRender) {
            var r1, i1 = e1.styledShapes.length;
            for(r1 = 0; r1 < i1; r1 += 1)this.renderStyledShape(e1.styledShapes[r1], e1.sh);
        }
    }, CVShapeElement.prototype.renderFill = function(t1, e1, r1) {
        var i1 = e1.style;
        (e1.c._mdf || this._isFirstFrame) && (i1.co = "rgb(" + bm_floor(e1.c.v[0]) + "," + bm_floor(e1.c.v[1]) + "," + bm_floor(e1.c.v[2]) + ")"), (e1.o._mdf || r1._opMdf || this._isFirstFrame) && (i1.coOp = e1.o.v * r1.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t1, e1, r1) {
        var i1 = e1.style;
        if (!i1.grd || e1.g._mdf || e1.s._mdf || e1.e._mdf || 1 !== t1.t && (e1.h._mdf || e1.a._mdf)) {
            var s1 = this.globalData.canvasContext, a1 = e1.s.v, n1 = e1.e.v;
            if (1 === t1.t) m1 = s1.createLinearGradient(a1[0], a1[1], n1[0], n1[1]);
            else var o1 = Math.sqrt(Math.pow(a1[0] - n1[0], 2) + Math.pow(a1[1] - n1[1], 2)), h1 = Math.atan2(n1[1] - a1[1], n1[0] - a1[0]), l1 = o1 * (1 <= e1.h.v ? .99 : e1.h.v <= -1 ? -0.99 : e1.h.v), p1 = Math.cos(h1 + e1.a.v) * l1 + a1[0], f1 = Math.sin(h1 + e1.a.v) * l1 + a1[1], m1 = s1.createRadialGradient(p1, f1, 0, a1[0], a1[1], o1);
            var c1, d1 = t1.g.p, u1 = e1.g.c, y1 = 1;
            for(c1 = 0; c1 < d1; c1 += 1)e1.g._hasOpacity && e1.g._collapsable && (y1 = e1.g.o[2 * c1 + 1]), m1.addColorStop(u1[4 * c1] / 100, "rgba(" + u1[4 * c1 + 1] + "," + u1[4 * c1 + 2] + "," + u1[4 * c1 + 3] + "," + y1 + ")");
            i1.grd = m1;
        }
        i1.coOp = e1.o.v * r1.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t1, e1, r1) {
        var i1 = e1.style, s1 = e1.d;
        s1 && (s1._mdf || this._isFirstFrame) && (i1.da = s1.dashArray, i1.do = s1.dashoffset[0]), (e1.c._mdf || this._isFirstFrame) && (i1.co = "rgb(" + bm_floor(e1.c.v[0]) + "," + bm_floor(e1.c.v[1]) + "," + bm_floor(e1.c.v[2]) + ")"), (e1.o._mdf || r1._opMdf || this._isFirstFrame) && (i1.coOp = e1.o.v * r1.opacity), (e1.w._mdf || this._isFirstFrame) && (i1.wi = e1.w.v);
    }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
        var t1 = this.canvasContext;
        t1.fillStyle = this.data.sc, t1.fillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
        ITextElement
    ], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
        var t1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t1.l ? t1.l.length : 0);
        var e1 = !1;
        t1.fc ? (e1 = !0, this.values.fill = this.buildColor(t1.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e1;
        var r1 = !1;
        t1.sc && (r1 = !0, this.values.stroke = this.buildColor(t1.sc), this.values.sWidth = t1.sw);
        var i1, s1, a1 = this.globalData.fontManager.getFontByName(t1.f), n1 = t1.l, o1 = this.mHelper;
        this.stroke = r1, this.values.fValue = t1.finalSize + "px " + this.globalData.fontManager.getFontByName(t1.f).fFamily, s1 = t1.finalText.length;
        var h1, l1, p1, f1, m1, c1, d1, u1, y1, g1, v1 = this.data.singleShape, b1 = t1.tr / 1e3 * t1.finalSize, E1 = 0, x1 = 0, P1 = !0, S1 = 0;
        for(i1 = 0; i1 < s1; i1 += 1){
            for(l1 = (h1 = this.globalData.fontManager.getCharData(t1.finalText[i1], a1.fStyle, this.globalData.fontManager.getFontByName(t1.f).fFamily)) && h1.data || {}, o1.reset(), v1 && n1[i1].n && (E1 = -b1, x1 += t1.yOffset, x1 += P1 ? 1 : 0, P1 = !1), d1 = (m1 = l1.shapes ? l1.shapes[0].it : []).length, o1.scale(t1.finalSize / 100, t1.finalSize / 100), v1 && this.applyTextPropertiesToMatrix(t1, o1, n1[i1].line, E1, x1), y1 = createSizedArray(d1), c1 = 0; c1 < d1; c1 += 1){
                for(f1 = m1[c1].ks.k.i.length, u1 = m1[c1].ks.k, g1 = [], p1 = 1; p1 < f1; p1 += 1)1 == p1 && g1.push(o1.applyToX(u1.v[0][0], u1.v[0][1], 0), o1.applyToY(u1.v[0][0], u1.v[0][1], 0)), g1.push(o1.applyToX(u1.o[p1 - 1][0], u1.o[p1 - 1][1], 0), o1.applyToY(u1.o[p1 - 1][0], u1.o[p1 - 1][1], 0), o1.applyToX(u1.i[p1][0], u1.i[p1][1], 0), o1.applyToY(u1.i[p1][0], u1.i[p1][1], 0), o1.applyToX(u1.v[p1][0], u1.v[p1][1], 0), o1.applyToY(u1.v[p1][0], u1.v[p1][1], 0));
                g1.push(o1.applyToX(u1.o[p1 - 1][0], u1.o[p1 - 1][1], 0), o1.applyToY(u1.o[p1 - 1][0], u1.o[p1 - 1][1], 0), o1.applyToX(u1.i[0][0], u1.i[0][1], 0), o1.applyToY(u1.i[0][0], u1.i[0][1], 0), o1.applyToX(u1.v[0][0], u1.v[0][1], 0), o1.applyToY(u1.v[0][0], u1.v[0][1], 0)), y1[c1] = g1;
            }
            v1 && (E1 += n1[i1].l, E1 += b1), this.textSpans[S1] ? this.textSpans[S1].elem = y1 : this.textSpans[S1] = {
                elem: y1
            }, S1 += 1;
        }
    }, CVTextElement.prototype.renderInnerContent = function() {
        var t1, e1, r1, i1, s1, a1, n1 = this.canvasContext;
        this.finalTransform.mat.props, n1.font = this.values.fValue, n1.lineCap = "butt", n1.lineJoin = "miter", n1.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var o1, h1 = this.textAnimator.renderedLetters, l1 = this.textProperty.currentData.l;
        e1 = l1.length;
        var p1, f1, m1 = null, c1 = null, d1 = null;
        for(t1 = 0; t1 < e1; t1 += 1)if (!l1[t1].n) {
            if ((o1 = h1[t1]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o1.p), this.globalData.renderer.ctxOpacity(o1.o)), this.fill) {
                for(o1 && o1.fc ? m1 !== o1.fc && (m1 = o1.fc, n1.fillStyle = o1.fc) : m1 !== this.values.fill && (m1 = this.values.fill, n1.fillStyle = this.values.fill), i1 = (p1 = this.textSpans[t1].elem).length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < i1; r1 += 1)for(a1 = (f1 = p1[r1]).length, this.globalData.canvasContext.moveTo(f1[0], f1[1]), s1 = 2; s1 < a1; s1 += 6)this.globalData.canvasContext.bezierCurveTo(f1[s1], f1[s1 + 1], f1[s1 + 2], f1[s1 + 3], f1[s1 + 4], f1[s1 + 5]);
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
            }
            if (this.stroke) {
                for(o1 && o1.sw ? d1 !== o1.sw && (d1 = o1.sw, n1.lineWidth = o1.sw) : d1 !== this.values.sWidth && (d1 = this.values.sWidth, n1.lineWidth = this.values.sWidth), o1 && o1.sc ? c1 !== o1.sc && (c1 = o1.sc, n1.strokeStyle = o1.sc) : c1 !== this.values.stroke && (c1 = this.values.stroke, n1.strokeStyle = this.values.stroke), i1 = (p1 = this.textSpans[t1].elem).length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < i1; r1 += 1)for(a1 = (f1 = p1[r1]).length, this.globalData.canvasContext.moveTo(f1[0], f1[1]), s1 = 2; s1 < a1; s1 += 6)this.globalData.canvasContext.bezierCurveTo(f1[s1], f1[s1 + 1], f1[s1 + 2], f1[s1 + 3], f1[s1 + 4], f1[s1 + 5]);
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
            }
            o1 && this.globalData.renderer.restore();
        }
    }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
        checkBlendMode: function() {},
        initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
        },
        createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
        },
        renderElement: function() {
            this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v);
        },
        renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function() {},
        setMatte: function() {}
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], HSolidElement), HSolidElement.prototype.createContent = function() {
        var t1;
        this.data.hasMask ? ((t1 = createNS("rect")).setAttribute("width", this.data.sw), t1.setAttribute("height", this.data.sh), t1.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t1 = createTag("div")).style.width = this.data.sw + "px", t1.style.height = this.data.sh + "px", t1.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t1);
    }, extendPrototype([
        HybridRenderer,
        ICompElement,
        HBaseElement
    ], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t1, e1) {
        for(var r1, i1 = 0; i1 < e1;)this.elements[i1] && this.elements[i1].getBaseElement && (r1 = this.elements[i1].getBaseElement()), i1 += 1;
        r1 ? this.layerElement.insertBefore(t1, r1) : this.layerElement.appendChild(t1);
    }, extendPrototype([
        BaseElement,
        TransformElement,
        HSolidElement,
        SVGShapeElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
        var t1;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t1 = this.svgElement;
        else {
            t1 = createNS("svg");
            var e1 = this.comp.data ? this.comp.data : this.globalData.compSize;
            t1.setAttribute("width", e1.w), t1.setAttribute("height", e1.h), t1.appendChild(this.shapesContainer), this.layerElement.appendChild(t1);
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t1;
    }, HShapeElement.prototype.getTransformedPoint = function(t1, e1) {
        var r1, i1 = t1.length;
        for(r1 = 0; r1 < i1; r1 += 1)e1 = t1[r1].mProps.v.applyToPointArray(e1[0], e1[1], 0);
        return e1;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t1, e1) {
        var r1, i1, s1, a1, n1, o1 = t1.sh.v, h1 = t1.transformers, l1 = o1._length;
        if (!(l1 <= 1)) {
            for(r1 = 0; r1 < l1 - 1; r1 += 1)i1 = this.getTransformedPoint(h1, o1.v[r1]), s1 = this.getTransformedPoint(h1, o1.o[r1]), a1 = this.getTransformedPoint(h1, o1.i[r1 + 1]), n1 = this.getTransformedPoint(h1, o1.v[r1 + 1]), this.checkBounds(i1, s1, a1, n1, e1);
            o1.c && (i1 = this.getTransformedPoint(h1, o1.v[r1]), s1 = this.getTransformedPoint(h1, o1.o[r1]), a1 = this.getTransformedPoint(h1, o1.i[0]), n1 = this.getTransformedPoint(h1, o1.v[0]), this.checkBounds(i1, s1, a1, n1, e1));
        }
    }, HShapeElement.prototype.checkBounds = function(t1, e1, r1, i1, s1) {
        this.getBoundsOfCurve(t1, e1, r1, i1);
        var a1 = this.shapeBoundingBox;
        s1.x = bm_min(a1.left, s1.x), s1.xMax = bm_max(a1.right, s1.xMax), s1.y = bm_min(a1.top, s1.y), s1.yMax = bm_max(a1.bottom, s1.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(t1, e1, r1, i1) {
        for(var s1, a1, n1, o1, h1, l1, p1, f1 = [
            [
                t1[0],
                i1[0]
            ],
            [
                t1[1],
                i1[1]
            ]
        ], m1 = 0; m1 < 2; ++m1)if (a1 = 6 * t1[m1] - 12 * e1[m1] + 6 * r1[m1], s1 = -3 * t1[m1] + 9 * e1[m1] - 9 * r1[m1] + 3 * i1[m1], n1 = 3 * e1[m1] - 3 * t1[m1], a1 |= 0, n1 |= 0, 0 != (s1 |= 0)) (h1 = a1 * a1 - 4 * n1 * s1) < 0 || (0 < (l1 = (-a1 + bm_sqrt(h1)) / (2 * s1)) && l1 < 1 && f1[m1].push(this.calculateF(l1, t1, e1, r1, i1, m1)), 0 < (p1 = (-a1 - bm_sqrt(h1)) / (2 * s1)) && p1 < 1 && f1[m1].push(this.calculateF(p1, t1, e1, r1, i1, m1)));
        else {
            if (0 === a1) continue;
            0 < (o1 = -n1 / a1) && o1 < 1 && f1[m1].push(this.calculateF(o1, t1, e1, r1, i1, m1));
        }
        this.shapeBoundingBox.left = bm_min.apply(null, f1[0]), this.shapeBoundingBox.top = bm_min.apply(null, f1[1]), this.shapeBoundingBox.right = bm_max.apply(null, f1[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, f1[1]);
    }, HShapeElement.prototype.calculateF = function(t1, e1, r1, i1, s1, a1) {
        return bm_pow(1 - t1, 3) * e1[a1] + 3 * bm_pow(1 - t1, 2) * t1 * r1[a1] + 3 * (1 - t1) * bm_pow(t1, 2) * i1[a1] + bm_pow(t1, 3) * s1[a1];
    }, HShapeElement.prototype.calculateBoundingBox = function(t1, e1) {
        var r1, i1 = t1.length;
        for(r1 = 0; r1 < i1; r1 += 1)t1[r1] && t1[r1].sh ? this.calculateShapeBoundingBox(t1[r1], e1) : t1[r1] && t1[r1].it && this.calculateBoundingBox(t1[r1].it, e1);
    }, HShapeElement.prototype.currentBoxContains = function(t1) {
        return this.currentBBox.x <= t1.x && this.currentBBox.y <= t1.y && this.currentBBox.width + this.currentBBox.x >= t1.x + t1.width && this.currentBBox.height + this.currentBBox.y >= t1.y + t1.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t1 = this.tempBoundingBox, e1 = 999999;
            if (t1.x = e1, t1.xMax = -e1, t1.y = e1, t1.yMax = -e1, this.calculateBoundingBox(this.itemsData, t1), t1.width = t1.xMax < t1.x ? 0 : t1.xMax - t1.x, t1.height = t1.yMax < t1.y ? 0 : t1.yMax - t1.y, this.currentBoxContains(t1)) return;
            var r1 = !1;
            this.currentBBox.w !== t1.width && (this.currentBBox.w = t1.width, this.shapeCont.setAttribute("width", t1.width), r1 = !0), this.currentBBox.h !== t1.height && (this.currentBBox.h = t1.height, this.shapeCont.setAttribute("height", t1.height), r1 = !0), (r1 || this.currentBBox.x !== t1.x || this.currentBBox.y !== t1.y) && (this.currentBBox.w = t1.width, this.currentBBox.h = t1.height, this.currentBBox.x = t1.x, this.currentBBox.y = t1.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
        }
    }, extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement
    ], HTextElement), HTextElement.prototype.createContent = function() {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t1 = createNS("g");
            this.maskedElement.appendChild(t1), this.innerElem = t1;
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
        var t1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t1.l ? t1.l.length : 0);
        var e1 = this.innerElem.style;
        e1.color = e1.fill = t1.fc ? this.buildColor(t1.fc) : "rgba(0,0,0,0)", t1.sc && (e1.stroke = this.buildColor(t1.sc), e1.strokeWidth = t1.sw + "px");
        var r1, i1, s1 = this.globalData.fontManager.getFontByName(t1.f);
        if (!this.globalData.fontManager.chars) {
            if (e1.fontSize = t1.finalSize + "px", e1.lineHeight = t1.finalSize + "px", s1.fClass) this.innerElem.className = s1.fClass;
            else {
                e1.fontFamily = s1.fFamily;
                var a1 = t1.fWeight, n1 = t1.fStyle;
                e1.fontStyle = n1, e1.fontWeight = a1;
            }
        }
        var o1, h1, l1, p1 = t1.l;
        i1 = p1.length;
        var f1, m1 = this.mHelper, c1 = "", d1 = 0;
        for(r1 = 0; r1 < i1; r1 += 1){
            if (this.globalData.fontManager.chars ? (this.textPaths[d1] ? o1 = this.textPaths[d1] : ((o1 = createNS("path")).setAttribute("stroke-linecap", "butt"), o1.setAttribute("stroke-linejoin", "round"), o1.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d1] ? l1 = (h1 = this.textSpans[d1]).children[0] : ((h1 = createTag("div")).style.lineHeight = 0, (l1 = createNS("svg")).appendChild(o1), styleDiv(h1)))) : this.isMasked ? o1 = this.textPaths[d1] ? this.textPaths[d1] : createNS("text") : this.textSpans[d1] ? (h1 = this.textSpans[d1], o1 = this.textPaths[d1]) : (styleDiv(h1 = createTag("span")), styleDiv(o1 = createTag("span")), h1.appendChild(o1)), this.globalData.fontManager.chars) {
                var u1, y1 = this.globalData.fontManager.getCharData(t1.finalText[r1], s1.fStyle, this.globalData.fontManager.getFontByName(t1.f).fFamily);
                if (u1 = y1 ? y1.data : null, m1.reset(), u1 && u1.shapes && (f1 = u1.shapes[0].it, m1.scale(t1.finalSize / 100, t1.finalSize / 100), c1 = this.createPathShape(m1, f1), o1.setAttribute("d", c1)), this.isMasked) this.innerElem.appendChild(o1);
                else {
                    if (this.innerElem.appendChild(h1), u1 && u1.shapes) {
                        document.body.appendChild(l1);
                        var g1 = l1.getBBox();
                        l1.setAttribute("width", g1.width + 2), l1.setAttribute("height", g1.height + 2), l1.setAttribute("viewBox", g1.x - 1 + " " + (g1.y - 1) + " " + (g1.width + 2) + " " + (g1.height + 2)), l1.style.transform = l1.style.webkitTransform = "translate(" + (g1.x - 1) + "px," + (g1.y - 1) + "px)", p1[r1].yOffset = g1.y - 1;
                    } else l1.setAttribute("width", 1), l1.setAttribute("height", 1);
                    h1.appendChild(l1);
                }
            } else o1.textContent = p1[r1].val, o1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o1) : (this.innerElem.appendChild(h1), o1.style.transform = o1.style.webkitTransform = "translate3d(0," + -t1.finalSize / 1.2 + "px,0)");
            this.isMasked ? this.textSpans[d1] = o1 : this.textSpans[d1] = h1, this.textSpans[d1].style.display = "block", this.textPaths[d1] = o1, d1 += 1;
        }
        for(; d1 < this.textSpans.length;)this.textSpans[d1].style.display = "none", d1 += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
        if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)");
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var t1, e1, r1, i1, s1, a1 = 0, n1 = this.textAnimator.renderedLetters, o1 = this.textProperty.currentData.l;
            for(e1 = o1.length, t1 = 0; t1 < e1; t1 += 1)o1[t1].n ? a1 += 1 : (i1 = this.textSpans[t1], s1 = this.textPaths[t1], r1 = n1[a1], a1 += 1, r1._mdf.m && (this.isMasked ? i1.setAttribute("transform", r1.m) : i1.style.transform = i1.style.webkitTransform = r1.m), i1.style.opacity = r1.o, r1.sw && r1._mdf.sw && s1.setAttribute("stroke-width", r1.sw), r1.sc && r1._mdf.sc && s1.setAttribute("stroke", r1.sc), r1.fc && r1._mdf.fc && (s1.setAttribute("fill", r1.fc), s1.style.color = r1.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var h1 = this.innerElem.getBBox();
                this.currentBBox.w !== h1.width && (this.currentBBox.w = h1.width, this.svgElement.setAttribute("width", h1.width)), this.currentBBox.h !== h1.height && (this.currentBBox.h = h1.height, this.svgElement.setAttribute("height", h1.height)), this.currentBBox.w === h1.width + 2 && this.currentBBox.h === h1.height + 2 && this.currentBBox.x === h1.x - 1 && this.currentBBox.y === h1.y - 1 || (this.currentBBox.w = h1.width + 2, this.currentBBox.h = h1.height + 2, this.currentBBox.x = h1.x - 1, this.currentBBox.y = h1.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
            }
        }
    }, extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HSolidElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], HImageElement), HImageElement.prototype.createContent = function() {
        var t1 = this.globalData.getAssetsPath(this.assetData), e1 = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t1), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e1), e1.src = t1, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([
        BaseElement,
        FrameElement,
        HierarchyElement
    ], HCameraElement), HCameraElement.prototype.setup = function() {
        var t1, e1, r1 = this.comp.threeDElements.length;
        for(t1 = 0; t1 < r1; t1 += 1)"3d" === (e1 = this.comp.threeDElements[t1]).type && (e1.perspectiveElem.style.perspective = e1.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e1.container.style.transformOrigin = e1.container.style.mozTransformOrigin = e1.container.style.webkitTransformOrigin = "0px 0px 0px", e1.perspectiveElem.style.transform = e1.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)");
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var t1, e1, r1 = this._isFirstFrame;
        if (this.hierarchy) for(e1 = this.hierarchy.length, t1 = 0; t1 < e1; t1 += 1)r1 = this.hierarchy[t1].finalTransform.mProp._mdf || r1;
        if (r1 || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy) for(t1 = e1 = this.hierarchy.length - 1; 0 <= t1; t1 -= 1){
                var i1 = this.hierarchy[t1].finalTransform.mProp;
                this.mat.translate(-i1.p.v[0], -i1.p.v[1], i1.p.v[2]), this.mat.rotateX(-i1.or.v[0]).rotateY(-i1.or.v[1]).rotateZ(i1.or.v[2]), this.mat.rotateX(-i1.rx.v).rotateY(-i1.ry.v).rotateZ(i1.rz.v), this.mat.scale(1 / i1.s.v[0], 1 / i1.s.v[1], 1 / i1.s.v[2]), this.mat.translate(i1.a.v[0], i1.a.v[1], i1.a.v[2]);
            }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var s1;
                s1 = this.p ? [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2]
                ] : [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2]
                ];
                var a1 = Math.sqrt(Math.pow(s1[0], 2) + Math.pow(s1[1], 2) + Math.pow(s1[2], 2)), n1 = [
                    s1[0] / a1,
                    s1[1] / a1,
                    s1[2] / a1
                ], o1 = Math.sqrt(n1[2] * n1[2] + n1[0] * n1[0]), h1 = Math.atan2(n1[1], o1), l1 = Math.atan2(n1[0], -n1[2]);
                this.mat.rotateY(l1).rotateX(-h1);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p1 = !this._prevMat.equals(this.mat);
            if ((p1 || this.pe._mdf) && this.comp.threeDElements) {
                var f1;
                for(e1 = this.comp.threeDElements.length, t1 = 0; t1 < e1; t1 += 1)"3d" === (f1 = this.comp.threeDElements[t1]).type && (p1 && (f1.container.style.transform = f1.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (f1.perspectiveElem.style.perspective = f1.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                this.mat.clone(this._prevMat);
            }
        }
        this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(t1) {
        this.prepareProperties(t1, !0);
    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
        return null;
    }, HEffects.prototype.renderFrame = function() {};
    var animationManager = function() {
        function t1(t1) {
            for(var e1 = 0, r1 = t1.target; e1 < f1;)l1[e1].animation === r1 && (l1.splice(e1, 1), e1 -= 1, f1 -= 1, r1.isPaused || i1()), e1 += 1;
        }
        function e1(t1, e1) {
            if (!t1) return null;
            for(var r1 = 0; r1 < f1;){
                if (l1[r1].elem == t1 && null !== l1[r1].elem) return l1[r1].animation;
                r1 += 1;
            }
            var i1 = new AnimationItem;
            return s1(i1, t1), i1.setData(t1, e1), i1;
        }
        function r1() {
            m1 += 1, o1();
        }
        function i1() {
            m1 -= 1;
        }
        function s1(e1, s1) {
            e1.addEventListener("destroy", t1), e1.addEventListener("_active", r1), e1.addEventListener("_idle", i1), l1.push({
                elem: s1,
                animation: e1
            }), f1 += 1;
        }
        function a1(t1) {
            var e1, r1 = t1 - p1;
            for(e1 = 0; e1 < f1; e1 += 1)l1[e1].animation.advanceTime(r1);
            p1 = t1, m1 && !d1 ? window.requestAnimationFrame(a1) : c1 = !0;
        }
        function n1(t1) {
            p1 = t1, window.requestAnimationFrame(a1);
        }
        function o1() {
            !d1 && m1 && c1 && (window.requestAnimationFrame(n1), c1 = !1);
        }
        var h1 = {}, l1 = [], p1 = 0, f1 = 0, m1 = 0, c1 = !0, d1 = !1;
        return h1.registerAnimation = e1, h1.loadAnimation = function(t1) {
            var e1 = new AnimationItem;
            return s1(e1, null), e1.setParams(t1), e1;
        }, h1.setSpeed = function(t1, e1) {
            var r1;
            for(r1 = 0; r1 < f1; r1 += 1)l1[r1].animation.setSpeed(t1, e1);
        }, h1.setDirection = function(t1, e1) {
            var r1;
            for(r1 = 0; r1 < f1; r1 += 1)l1[r1].animation.setDirection(t1, e1);
        }, h1.play = function(t1) {
            var e1;
            for(e1 = 0; e1 < f1; e1 += 1)l1[e1].animation.play(t1);
        }, h1.pause = function(t1) {
            var e1;
            for(e1 = 0; e1 < f1; e1 += 1)l1[e1].animation.pause(t1);
        }, h1.stop = function(t1) {
            var e1;
            for(e1 = 0; e1 < f1; e1 += 1)l1[e1].animation.stop(t1);
        }, h1.togglePause = function(t1) {
            var e1;
            for(e1 = 0; e1 < f1; e1 += 1)l1[e1].animation.togglePause(t1);
        }, h1.searchAnimations = function(t1, r1, i1) {
            var s1, a1 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), n1 = a1.length;
            for(s1 = 0; s1 < n1; s1 += 1)i1 && a1[s1].setAttribute("data-bm-type", i1), e1(a1[s1], t1);
            if (r1 && 0 === n1) {
                i1 || (i1 = "svg");
                var o1 = document.getElementsByTagName("body")[0];
                o1.innerHTML = "";
                var h1 = createTag("div");
                h1.style.width = "100%", h1.style.height = "100%", h1.setAttribute("data-bm-type", i1), o1.appendChild(h1), e1(h1, t1);
            }
        }, h1.resize = function() {
            var t1;
            for(t1 = 0; t1 < f1; t1 += 1)l1[t1].animation.resize();
        }, h1.goToAndStop = function(t1, e1, r1) {
            var i1;
            for(i1 = 0; i1 < f1; i1 += 1)l1[i1].animation.goToAndStop(t1, e1, r1);
        }, h1.destroy = function(t1) {
            var e1;
            for(e1 = f1 - 1; 0 <= e1; e1 -= 1)l1[e1].animation.destroy(t1);
        }, h1.freeze = function() {
            d1 = !0;
        }, h1.unfreeze = function() {
            d1 = !1, o1();
        }, h1.getRegisteredAnimations = function() {
            var t1, e1 = l1.length, r1 = [];
            for(t1 = 0; t1 < e1; t1 += 1)r1.push(l1[t1].animation);
            return r1;
        }, h1;
    }(), AnimationItem = function() {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader;
    };
    extendPrototype([
        BaseEvent
    ], AnimationItem), AnimationItem.prototype.setParams = function(t1) {
        (t1.wrapper || t1.container) && (this.wrapper = t1.wrapper || t1.container);
        var e1 = t1.animType ? t1.animType : t1.renderer ? t1.renderer : "svg";
        switch(e1){
            case "canvas":
                this.renderer = new CanvasRenderer(this, t1.rendererSettings);
                break;
            case "svg":
                this.renderer = new SVGRenderer(this, t1.rendererSettings);
                break;
            default:
                this.renderer = new HybridRenderer(this, t1.rendererSettings);
        }
        this.imagePreloader.setCacheType(e1), this.renderer.setProjectInterface(this.projectInterface), this.animType = e1, "" === t1.loop || null === t1.loop || void 0 === t1.loop || !0 === t1.loop ? this.loop = !0 : !1 === t1.loop ? this.loop = !1 : this.loop = parseInt(t1.loop), this.autoplay = !("autoplay" in t1) || t1.autoplay, this.name = t1.name ? t1.name : "", this.autoloadSegments = !t1.hasOwnProperty("autoloadSegments") || t1.autoloadSegments, this.assetsPath = t1.assetsPath, this.initialSegment = t1.initialSegment, t1.animationData ? this.configAnimation(t1.animationData) : t1.path && (-1 !== t1.path.lastIndexOf("\\") ? this.path = t1.path.substr(0, t1.path.lastIndexOf("\\") + 1) : this.path = t1.path.substr(0, t1.path.lastIndexOf("/") + 1), this.fileName = t1.path.substr(t1.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t1.path, this.configAnimation.bind(this), (function() {
            this.trigger("data_failed");
        }).bind(this)));
    }, AnimationItem.prototype.setData = function(t1, e1) {
        var r1 = {
            wrapper: t1,
            animationData: e1 ? "object" == typeof e1 ? e1 : JSON.parse(e1) : null
        }, i1 = t1.attributes;
        r1.path = i1.getNamedItem("data-animation-path") ? i1.getNamedItem("data-animation-path").value : i1.getNamedItem("data-bm-path") ? i1.getNamedItem("data-bm-path").value : i1.getNamedItem("bm-path") ? i1.getNamedItem("bm-path").value : "", r1.animType = i1.getNamedItem("data-anim-type") ? i1.getNamedItem("data-anim-type").value : i1.getNamedItem("data-bm-type") ? i1.getNamedItem("data-bm-type").value : i1.getNamedItem("bm-type") ? i1.getNamedItem("bm-type").value : i1.getNamedItem("data-bm-renderer") ? i1.getNamedItem("data-bm-renderer").value : i1.getNamedItem("bm-renderer") ? i1.getNamedItem("bm-renderer").value : "canvas";
        var s1 = i1.getNamedItem("data-anim-loop") ? i1.getNamedItem("data-anim-loop").value : i1.getNamedItem("data-bm-loop") ? i1.getNamedItem("data-bm-loop").value : i1.getNamedItem("bm-loop") ? i1.getNamedItem("bm-loop").value : "";
        "" === s1 || (r1.loop = "false" !== s1 && ("true" === s1 || parseInt(s1)));
        var a1 = i1.getNamedItem("data-anim-autoplay") ? i1.getNamedItem("data-anim-autoplay").value : i1.getNamedItem("data-bm-autoplay") ? i1.getNamedItem("data-bm-autoplay").value : !i1.getNamedItem("bm-autoplay") || i1.getNamedItem("bm-autoplay").value;
        r1.autoplay = "false" !== a1, r1.name = i1.getNamedItem("data-name") ? i1.getNamedItem("data-name").value : i1.getNamedItem("data-bm-name") ? i1.getNamedItem("data-bm-name").value : i1.getNamedItem("bm-name") ? i1.getNamedItem("bm-name").value : "", "false" === (i1.getNamedItem("data-anim-prerender") ? i1.getNamedItem("data-anim-prerender").value : i1.getNamedItem("data-bm-prerender") ? i1.getNamedItem("data-bm-prerender").value : i1.getNamedItem("bm-prerender") ? i1.getNamedItem("bm-prerender").value : "") && (r1.prerender = !1), this.setParams(r1);
    }, AnimationItem.prototype.includeLayers = function(t1) {
        t1.op > this.animationData.op && (this.animationData.op = t1.op, this.totalFrames = Math.floor(t1.op - this.animationData.ip));
        var e1, r1, i1 = this.animationData.layers, s1 = i1.length, a1 = t1.layers, n1 = a1.length;
        for(r1 = 0; r1 < n1; r1 += 1)for(e1 = 0; e1 < s1;){
            if (i1[e1].id == a1[r1].id) {
                i1[e1] = a1[r1];
                break;
            }
            e1 += 1;
        }
        if ((t1.chars || t1.fonts) && (this.renderer.globalData.fontManager.addChars(t1.chars), this.renderer.globalData.fontManager.addFonts(t1.fonts, this.renderer.globalData.defs)), t1.assets) for(s1 = t1.assets.length, e1 = 0; e1 < s1; e1 += 1)this.animationData.assets.push(t1.assets[e1]);
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t1.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
        var t1 = this.animationData.segments;
        if (!t1 || 0 === t1.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
        var e1 = t1.shift();
        this.timeCompleted = e1.time * this.frameRate;
        var r1 = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, assetLoader.load(r1, this.includeLayers.bind(this), (function() {
            this.trigger("data_failed");
        }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t1) {
        if (this.renderer) try {
            this.animationData = t1, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t1), t1.assets || (t1.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t1.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded();
        } catch (t1) {
            this.triggerConfigError(t1);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
        this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
            this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
    }, AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize();
    }, AnimationItem.prototype.setSubframe = function(t1) {
        this.isSubframeEnabled = !!t1;
    }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
    }, AnimationItem.prototype.renderFrame = function() {
        if (!1 !== this.isLoaded) try {
            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t1) {
            this.triggerRenderFrameError(t1);
        }
    }, AnimationItem.prototype.play = function(t1) {
        t1 && this.name != t1 || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t1) {
        t1 && this.name != t1 || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"));
    }, AnimationItem.prototype.togglePause = function(t1) {
        t1 && this.name != t1 || (!0 === this.isPaused ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t1) {
        t1 && this.name != t1 || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.goToAndStop = function(t1, e1, r1) {
        r1 && this.name != r1 || (e1 ? this.setCurrentRawFrameValue(t1) : this.setCurrentRawFrameValue(t1 * this.frameModifier), this.pause());
    }, AnimationItem.prototype.goToAndPlay = function(t1, e1, r1) {
        this.goToAndStop(t1, e1, r1), this.play();
    }, AnimationItem.prototype.advanceTime = function(t1) {
        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e1 = this.currentRawFrame + t1 * this.frameModifier, r1 = !1;
            e1 >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e1 >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e1 % this.totalFrames) || (this.setCurrentRawFrameValue(e1 % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e1) : this.checkSegments(e1 > this.totalFrames ? e1 % this.totalFrames : 0) || (r1 = !0, e1 = this.totalFrames - 1) : e1 < 0 ? this.checkSegments(e1 % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r1 = !0, e1 = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e1 % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e1), r1 && (this.setCurrentRawFrameValue(e1), this.pause(), this.trigger("complete"));
        }
    }, AnimationItem.prototype.adjustSegment = function(t1, e1) {
        this.playCount = 0, t1[1] < t1[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t1[0] - t1[1], this.firstFrame = t1[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e1)) : t1[1] > t1[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t1[1] - t1[0], this.firstFrame = t1[0], this.setCurrentRawFrameValue(.001 + e1)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t1, e1) {
        var r1 = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t1 ? r1 = t1 : this.currentRawFrame + this.firstFrame > e1 && (r1 = e1 - t1)), this.firstFrame = t1, this.timeCompleted = this.totalFrames = e1 - t1, -1 !== r1 && this.goToAndStop(r1, !0);
    }, AnimationItem.prototype.playSegments = function(t1, e1) {
        if (e1 && (this.segments.length = 0), "object" == typeof t1[0]) {
            var r1, i1 = t1.length;
            for(r1 = 0; r1 < i1; r1 += 1)this.segments.push(t1[r1]);
        } else this.segments.push(t1);
        this.segments.length && e1 && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t1) {
        this.segments.length = 0, this.segments.push([
            this.animationData.ip,
            this.animationData.op
        ]), t1 && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t1) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t1), !0);
    }, AnimationItem.prototype.destroy = function(t1) {
        t1 && this.name != t1 || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t1) {
        this.currentRawFrame = t1, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t1) {
        this.playSpeed = t1, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t1) {
        this.playDirection = t1 < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
    }, AnimationItem.prototype.getPath = function() {
        return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t1) {
        var e1 = "";
        if (t1.e) e1 = t1.p;
        else if (this.assetsPath) {
            var r1 = t1.p;
            -1 !== r1.indexOf("images/") && (r1 = r1.split("/")[1]), e1 = this.assetsPath + r1;
        } else e1 = this.path, e1 += t1.u ? t1.u : "", e1 += t1.p;
        return e1;
    }, AnimationItem.prototype.getAssetData = function(t1) {
        for(var e1 = 0, r1 = this.assets.length; e1 < r1;){
            if (t1 == this.assets[e1].id) return this.assets[e1];
            e1 += 1;
        }
    }, AnimationItem.prototype.hide = function() {
        this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
        this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t1) {
        return t1 ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.trigger = function(t1) {
        if (this._cbs && this._cbs[t1]) switch(t1){
            case "enterFrame":
                this.triggerEvent(t1, new BMEnterFrameEvent(t1, this.currentFrame, this.totalFrames, this.frameModifier));
                break;
            case "loopComplete":
                this.triggerEvent(t1, new BMCompleteLoopEvent(t1, this.loop, this.playCount, this.frameMult));
                break;
            case "complete":
                this.triggerEvent(t1, new BMCompleteEvent(t1, this.frameMult));
                break;
            case "segmentStart":
                this.triggerEvent(t1, new BMSegmentStartEvent(t1, this.firstFrame, this.totalFrames));
                break;
            case "destroy":
                this.triggerEvent(t1, new BMDestroyEvent(t1, this));
                break;
            default:
                this.triggerEvent(t1);
        }
        "enterFrame" === t1 && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t1, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t1 && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t1, this.loop, this.playCount, this.frameMult)), "complete" === t1 && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t1, this.frameMult)), "segmentStart" === t1 && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t1, this.firstFrame, this.totalFrames)), "destroy" === t1 && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t1, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t1) {
        var e1 = new BMRenderFrameErrorEvent(t1, this.currentFrame);
        this.triggerEvent("error", e1), this.onError && this.onError.call(this, e1);
    }, AnimationItem.prototype.triggerConfigError = function(t1) {
        var e1 = new BMConfigErrorEvent(t1, this.currentFrame);
        this.triggerEvent("error", e1), this.onError && this.onError.call(this, e1);
    };
    var Expressions = (uX = {}, uX.initExpressions = function(t1) {
        function e1() {
            var t1, e1 = i1.length;
            for(t1 = 0; t1 < e1; t1 += 1)i1[t1].release();
            i1.length = 0;
        }
        var r1 = 0, i1 = [];
        t1.renderer.compInterface = CompExpressionInterface(t1.renderer), t1.renderer.globalData.projectInterface.registerComposition(t1.renderer), t1.renderer.globalData.pushExpression = function() {
            r1 += 1;
        }, t1.renderer.globalData.popExpression = function() {
            0 == (r1 -= 1) && e1();
        }, t1.renderer.globalData.registerExpressionProperty = function(t1) {
            -1 === i1.indexOf(t1) && i1.push(t1);
        };
    }, uX), uX;
    expressionsPlugin = Expressions;
    var ExpressionManager = function() {
        function $bm_isInstanceOfArray(t1) {
            return t1.constructor === Array || t1.constructor === Float32Array;
        }
        function isNumerable(t1, e1) {
            return "number" === t1 || "boolean" === t1 || "string" === t1 || e1 instanceof Number;
        }
        function $bm_neg(t1) {
            var e1 = typeof t1;
            if ("number" === e1 || "boolean" === e1 || t1 instanceof Number) return -t1;
            if ($bm_isInstanceOfArray(t1)) {
                var r1, i1 = t1.length, s1 = [];
                for(r1 = 0; r1 < i1; r1 += 1)s1[r1] = -t1[r1];
                return s1;
            }
            return t1.propType ? t1.v : void 0;
        }
        function sum(t1, e1) {
            var r1 = typeof t1, i1 = typeof e1;
            if ("string" === r1 || "string" === i1) return t1 + e1;
            if (isNumerable(r1, t1) && isNumerable(i1, e1)) return t1 + e1;
            if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) return (t1 = t1.slice(0))[0] = t1[0] + e1, t1;
            if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) return (e1 = e1.slice(0))[0] = t1 + e1[0], e1;
            if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                for(var s1 = 0, a1 = t1.length, n1 = e1.length, o1 = []; s1 < a1 || s1 < n1;)("number" == typeof t1[s1] || t1[s1] instanceof Number) && ("number" == typeof e1[s1] || e1[s1] instanceof Number) ? o1[s1] = t1[s1] + e1[s1] : o1[s1] = void 0 === e1[s1] ? t1[s1] : t1[s1] || e1[s1], s1 += 1;
                return o1;
            }
            return 0;
        }
        function sub(t1, e1) {
            var r1 = typeof t1, i1 = typeof e1;
            if (isNumerable(r1, t1) && isNumerable(i1, e1)) return "string" === r1 && (t1 = parseInt(t1)), "string" === i1 && (e1 = parseInt(e1)), t1 - e1;
            if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) return (t1 = t1.slice(0))[0] = t1[0] - e1, t1;
            if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) return (e1 = e1.slice(0))[0] = t1 - e1[0], e1;
            if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                for(var s1 = 0, a1 = t1.length, n1 = e1.length, o1 = []; s1 < a1 || s1 < n1;)("number" == typeof t1[s1] || t1[s1] instanceof Number) && ("number" == typeof e1[s1] || e1[s1] instanceof Number) ? o1[s1] = t1[s1] - e1[s1] : o1[s1] = void 0 === e1[s1] ? t1[s1] : t1[s1] || e1[s1], s1 += 1;
                return o1;
            }
            return 0;
        }
        function mul(t1, e1) {
            var r1, i1, s1, a1 = typeof t1, n1 = typeof e1;
            if (isNumerable(a1, t1) && isNumerable(n1, e1)) return t1 * e1;
            if ($bm_isInstanceOfArray(t1) && isNumerable(n1, e1)) {
                for(s1 = t1.length, r1 = createTypedArray("float32", s1), i1 = 0; i1 < s1; i1 += 1)r1[i1] = t1[i1] * e1;
                return r1;
            }
            if (isNumerable(a1, t1) && $bm_isInstanceOfArray(e1)) {
                for(s1 = e1.length, r1 = createTypedArray("float32", s1), i1 = 0; i1 < s1; i1 += 1)r1[i1] = t1 * e1[i1];
                return r1;
            }
            return 0;
        }
        function div(t1, e1) {
            var r1, i1, s1, a1 = typeof t1, n1 = typeof e1;
            if (isNumerable(a1, t1) && isNumerable(n1, e1)) return t1 / e1;
            if ($bm_isInstanceOfArray(t1) && isNumerable(n1, e1)) {
                for(s1 = t1.length, r1 = createTypedArray("float32", s1), i1 = 0; i1 < s1; i1 += 1)r1[i1] = t1[i1] / e1;
                return r1;
            }
            if (isNumerable(a1, t1) && $bm_isInstanceOfArray(e1)) {
                for(s1 = e1.length, r1 = createTypedArray("float32", s1), i1 = 0; i1 < s1; i1 += 1)r1[i1] = t1 / e1[i1];
                return r1;
            }
            return 0;
        }
        function mod(t1, e1) {
            return "string" == typeof t1 && (t1 = parseInt(t1)), "string" == typeof e1 && (e1 = parseInt(e1)), t1 % e1;
        }
        function clamp(t1, e1, r1) {
            if (r1 < e1) {
                var i1 = r1;
                r1 = e1, e1 = i1;
            }
            return Math.min(Math.max(t1, e1), r1);
        }
        function radiansToDegrees(t1) {
            return t1 / degToRads;
        }
        function degreesToRadians(t1) {
            return t1 * degToRads;
        }
        function length(t1, e1) {
            if ("number" == typeof t1 || t1 instanceof Number) return e1 = e1 || 0, Math.abs(t1 - e1);
            e1 || (e1 = helperLengthArray);
            var r1, i1 = Math.min(t1.length, e1.length), s1 = 0;
            for(r1 = 0; r1 < i1; r1 += 1)s1 += Math.pow(e1[r1] - t1[r1], 2);
            return Math.sqrt(s1);
        }
        function normalize(t1) {
            return div(t1, length(t1));
        }
        function rgbToHsl(t1) {
            var e1, r1, i1 = t1[0], s1 = t1[1], a1 = t1[2], n1 = Math.max(i1, s1, a1), o1 = Math.min(i1, s1, a1), h1 = (n1 + o1) / 2;
            if (n1 == o1) e1 = r1 = 0;
            else {
                var l1 = n1 - o1;
                switch(r1 = .5 < h1 ? l1 / (2 - n1 - o1) : l1 / (n1 + o1), n1){
                    case i1:
                        e1 = (s1 - a1) / l1 + (s1 < a1 ? 6 : 0);
                        break;
                    case s1:
                        e1 = (a1 - i1) / l1 + 2;
                        break;
                    case a1:
                        e1 = (i1 - s1) / l1 + 4;
                }
                e1 /= 6;
            }
            return [
                e1,
                r1,
                h1,
                t1[3]
            ];
        }
        function hue2rgb(t1, e1, r1) {
            return r1 < 0 && (r1 += 1), 1 < r1 && (r1 -= 1), r1 < 1 / 6 ? t1 + 6 * (e1 - t1) * r1 : r1 < .5 ? e1 : r1 < 2 / 3 ? t1 + (e1 - t1) * (2 / 3 - r1) * 6 : t1;
        }
        function hslToRgb(t1) {
            var e1, r1, i1, s1 = t1[0], a1 = t1[1], n1 = t1[2];
            if (0 === a1) e1 = r1 = i1 = n1;
            else {
                var o1 = n1 < .5 ? n1 * (1 + a1) : n1 + a1 - n1 * a1, h1 = 2 * n1 - o1;
                e1 = hue2rgb(h1, o1, s1 + 1 / 3), r1 = hue2rgb(h1, o1, s1), i1 = hue2rgb(h1, o1, s1 - 1 / 3);
            }
            return [
                e1,
                r1,
                i1,
                t1[3]
            ];
        }
        function linear(t1, e1, r1, i1, s1) {
            if (void 0 !== i1 && void 0 !== s1 || (i1 = e1, s1 = r1, e1 = 0, r1 = 1), r1 < e1) {
                var a1 = r1;
                r1 = e1, e1 = a1;
            }
            if (t1 <= e1) return i1;
            if (r1 <= t1) return s1;
            var n1 = r1 === e1 ? 0 : (t1 - e1) / (r1 - e1);
            if (!i1.length) return i1 + (s1 - i1) * n1;
            var o1, h1 = i1.length, l1 = createTypedArray("float32", h1);
            for(o1 = 0; o1 < h1; o1 += 1)l1[o1] = i1[o1] + (s1[o1] - i1[o1]) * n1;
            return l1;
        }
        function random(t1, e1) {
            if (void 0 === e1 && (void 0 === t1 ? (t1 = 0, e1 = 1) : (e1 = t1, t1 = void 0)), e1.length) {
                var r1, i1 = e1.length;
                t1 || (t1 = createTypedArray("float32", i1));
                var s1 = createTypedArray("float32", i1), a1 = BMMath.random();
                for(r1 = 0; r1 < i1; r1 += 1)s1[r1] = t1[r1] + a1 * (e1[r1] - t1[r1]);
                return s1;
            }
            return void 0 === t1 && (t1 = 0), t1 + BMMath.random() * (e1 - t1);
        }
        function createPath(t1, e1, r1, i1) {
            var s1, a1 = t1.length, n1 = shape_pool.newElement();
            n1.setPathData(!!i1, a1);
            var o1, h1, l1 = [
                0,
                0
            ];
            for(s1 = 0; s1 < a1; s1 += 1)o1 = e1 && e1[s1] ? e1[s1] : l1, h1 = r1 && r1[s1] ? r1[s1] : l1, n1.setTripleAt(t1[s1][0], t1[s1][1], h1[0] + t1[s1][0], h1[1] + t1[s1][1], o1[0] + t1[s1][0], o1[1] + t1[s1][1], s1, !0);
            return n1;
        }
        function initiateExpression(elem, data, property) {
            function loopInDuration(t1, e1) {
                return loopIn(t1, e1, !0);
            }
            function loopOutDuration(t1, e1) {
                return loopOut(t1, e1, !0);
            }
            function lookAt(t1, e1) {
                var r1 = [
                    e1[0] - t1[0],
                    e1[1] - t1[1],
                    e1[2] - t1[2]
                ], i1 = Math.atan2(r1[0], Math.sqrt(r1[1] * r1[1] + r1[2] * r1[2])) / degToRads;
                return [
                    -Math.atan2(r1[1], r1[2]) / degToRads,
                    i1,
                    0
                ];
            }
            function easeOut(t1, e1, r1, i1, s1) {
                return applyEase(easeOutBez, t1, e1, r1, i1, s1);
            }
            function easeIn(t1, e1, r1, i1, s1) {
                return applyEase(easeInBez, t1, e1, r1, i1, s1);
            }
            function ease(t1, e1, r1, i1, s1) {
                return applyEase(easeInOutBez, t1, e1, r1, i1, s1);
            }
            function applyEase(t1, e1, r1, i1, s1, a1) {
                void 0 === s1 ? (s1 = r1, a1 = i1) : e1 = (e1 - r1) / (i1 - r1);
                var n1 = t1(e1 = 1 < e1 ? 1 : e1 < 0 ? 0 : e1);
                if ($bm_isInstanceOfArray(s1)) {
                    var o1, h1 = s1.length, l1 = createTypedArray("float32", h1);
                    for(o1 = 0; o1 < h1; o1 += 1)l1[o1] = (a1[o1] - s1[o1]) * n1 + s1[o1];
                    return l1;
                }
                return (a1 - s1) * n1 + s1;
            }
            function nearestKey(t1) {
                var e1, r1, i1, s1 = data.k.length;
                if (data.k.length && "number" != typeof data.k[0]) {
                    if (r1 = -1, (t1 *= elem.comp.globalData.frameRate) < data.k[0].t) r1 = 1, i1 = data.k[0].t;
                    else {
                        for(e1 = 0; e1 < s1 - 1; e1 += 1){
                            if (t1 === data.k[e1].t) {
                                r1 = e1 + 1, i1 = data.k[e1].t;
                                break;
                            }
                            if (t1 > data.k[e1].t && t1 < data.k[e1 + 1].t) {
                                i1 = t1 - data.k[e1].t > data.k[e1 + 1].t - t1 ? (r1 = e1 + 2, data.k[e1 + 1].t) : (r1 = e1 + 1, data.k[e1].t);
                                break;
                            }
                        }
                        -1 === r1 && (r1 = e1 + 1, i1 = data.k[e1].t);
                    }
                } else i1 = r1 = 0;
                var a1 = {};
                return a1.index = r1, a1.time = i1 / elem.comp.globalData.frameRate, a1;
            }
            function key(t1) {
                var e1, r1, i1;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t1);
                t1 -= 1, e1 = {
                    time: data.k[t1].t / elem.comp.globalData.frameRate,
                    value: []
                };
                var s1 = data.k[t1].hasOwnProperty("s") ? data.k[t1].s : data.k[t1 - 1].e;
                for(i1 = s1.length, r1 = 0; r1 < i1; r1 += 1)e1[r1] = s1[r1], e1.value[r1] = s1[r1];
                return e1;
            }
            function framesToTime(t1, e1) {
                return e1 || (e1 = elem.comp.globalData.frameRate), t1 / e1;
            }
            function timeToFrames(t1, e1) {
                return t1 || 0 === t1 || (t1 = time), e1 || (e1 = elem.comp.globalData.frameRate), t1 * e1;
            }
            function seedRandom(t1) {
                BMMath.seedrandom(randSeed + t1);
            }
            function sourceRectAtTime() {
                return elem.sourceRectAtTime();
            }
            function substring(t1, e1) {
                return "string" == typeof value ? void 0 === e1 ? value.substring(t1) : value.substring(t1, e1) : "";
            }
            function substr(t1, e1) {
                return "string" == typeof value ? void 0 === e1 ? value.substr(t1) : value.substr(t1, e1) : "";
            }
            function posterizeTime(t1) {
                time = 0 === t1 ? 0 : Math.floor(time * t1) / t1, value = valueAtTime(time);
            }
            function executeExpression(t1) {
                return value = t1, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
            }
            var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                    return thisProperty.v;
                }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [], scoped_bm_rt;
            if (data.xf) {
                var i, len = data.xf.length;
                for(i = 0; i < len; i += 1)__expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())");
            }
            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = (function(t1, e1) {
                var r1, i1, s1 = this.pv.length ? this.pv.length : 1, a1 = createTypedArray("float32", s1), n1 = Math.floor(5 * time);
                for(i1 = r1 = 0; r1 < n1;){
                    for(i1 = 0; i1 < s1; i1 += 1)a1[i1] += -e1 + 2 * e1 * BMMath.random();
                    r1 += 1;
                }
                var o1 = 5 * time, h1 = o1 - Math.floor(o1), l1 = createTypedArray("float32", s1);
                if (1 < s1) {
                    for(i1 = 0; i1 < s1; i1 += 1)l1[i1] = this.pv[i1] + a1[i1] + (-e1 + 2 * e1 * BMMath.random()) * h1;
                    return l1;
                }
                return this.pv + a1[0] + (-e1 + 2 * e1 * BMMath.random()) * h1;
            }).bind(this);
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
            return executeExpression;
        }
        var ob = {}, Math = BMMath, window = null, document = null, easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get, add = sum, $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod, radians_to_degrees = radiansToDegrees, degrees_to_radians = radiansToDegrees, helperLengthArray = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        return ob.initiateExpression = initiateExpression, ob;
    }(), expressionHelpers = {
        searchExpressions: function(t1, e1, r1) {
            e1.x && (r1.k = !0, r1.x = !0, r1.initiateExpression = ExpressionManager.initiateExpression, r1.effectsSequence.push(r1.initiateExpression(t1, e1, r1).bind(r1)));
        },
        getSpeedAtTime: function(t1) {
            var e1 = this.getValueAtTime(t1), r1 = this.getValueAtTime(t1 + -0.01), i1 = 0;
            if (e1.length) {
                var s1;
                for(s1 = 0; s1 < e1.length; s1 += 1)i1 += Math.pow(r1[s1] - e1[s1], 2);
                i1 = 100 * Math.sqrt(i1);
            } else i1 = 0;
            return i1;
        },
        getVelocityAtTime: function(t1) {
            if (void 0 !== this.vel) return this.vel;
            var e1, r1, i1 = this.getValueAtTime(t1), s1 = this.getValueAtTime(t1 + -0.001);
            if (i1.length) for(e1 = createTypedArray("float32", i1.length), r1 = 0; r1 < i1.length; r1 += 1)e1[r1] = (s1[r1] - i1[r1]) / -0.001;
            else e1 = (s1 - i1) / -0.001;
            return e1;
        },
        getValueAtTime: function(t1) {
            return t1 *= this.elem.globalData.frameRate, (t1 -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t1 ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t1, this._cachingAtTime), this._cachingAtTime.lastFrame = t1), this._cachingAtTime.value;
        },
        getStaticValueAtTime: function() {
            return this.pv;
        },
        setGroupProperty: function(t1) {
            this.propertyGroup = t1;
        }
    };
    !function() {
        function t1(t1, e1, r1) {
            if (!this.k || !this.keyframes) return this.pv;
            t1 = t1 ? t1.toLowerCase() : "";
            var i1, s1, a1, n1, o1, h1 = this.comp.renderedFrame, l1 = this.keyframes, p1 = l1[l1.length - 1].t;
            if (h1 <= p1) return this.pv;
            if (r1 ? s1 = p1 - (i1 = e1 ? Math.abs(p1 - elem.comp.globalData.frameRate * e1) : Math.max(0, p1 - this.elem.data.ip)) : ((!e1 || e1 > l1.length - 1) && (e1 = l1.length - 1), i1 = p1 - (s1 = l1[l1.length - 1 - e1].t)), "pingpong" === t1) {
                if (Math.floor((h1 - s1) / i1) % 2 != 0) return this.getValueAtTime((i1 - (h1 - s1) % i1 + s1) / this.comp.globalData.frameRate, 0);
            } else {
                if ("offset" === t1) {
                    var f1 = this.getValueAtTime(s1 / this.comp.globalData.frameRate, 0), m1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), c1 = this.getValueAtTime(((h1 - s1) % i1 + s1) / this.comp.globalData.frameRate, 0), d1 = Math.floor((h1 - s1) / i1);
                    if (this.pv.length) {
                        for(n1 = (o1 = new Array(f1.length)).length, a1 = 0; a1 < n1; a1 += 1)o1[a1] = (m1[a1] - f1[a1]) * d1 + c1[a1];
                        return o1;
                    }
                    return (m1 - f1) * d1 + c1;
                }
                if ("continue" === t1) {
                    var u1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), y1 = this.getValueAtTime((p1 - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(n1 = (o1 = new Array(u1.length)).length, a1 = 0; a1 < n1; a1 += 1)o1[a1] = u1[a1] + (u1[a1] - y1[a1]) * ((h1 - p1) / this.comp.globalData.frameRate) / 5e-4;
                        return o1;
                    }
                    return u1 + (h1 - p1) / .001 * (u1 - y1);
                }
            }
            return this.getValueAtTime(((h1 - s1) % i1 + s1) / this.comp.globalData.frameRate, 0);
        }
        function e1(t1, e1, r1) {
            if (!this.k) return this.pv;
            t1 = t1 ? t1.toLowerCase() : "";
            var i1, s1, a1, n1, o1, h1 = this.comp.renderedFrame, l1 = this.keyframes, p1 = l1[0].t;
            if (p1 <= h1) return this.pv;
            if (r1 ? s1 = p1 + (i1 = e1 ? Math.abs(elem.comp.globalData.frameRate * e1) : Math.max(0, this.elem.data.op - p1)) : ((!e1 || e1 > l1.length - 1) && (e1 = l1.length - 1), i1 = (s1 = l1[e1].t) - p1), "pingpong" === t1) {
                if (Math.floor((p1 - h1) / i1) % 2 == 0) return this.getValueAtTime(((p1 - h1) % i1 + p1) / this.comp.globalData.frameRate, 0);
            } else {
                if ("offset" === t1) {
                    var f1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), m1 = this.getValueAtTime(s1 / this.comp.globalData.frameRate, 0), c1 = this.getValueAtTime((i1 - (p1 - h1) % i1 + p1) / this.comp.globalData.frameRate, 0), d1 = Math.floor((p1 - h1) / i1) + 1;
                    if (this.pv.length) {
                        for(n1 = (o1 = new Array(f1.length)).length, a1 = 0; a1 < n1; a1 += 1)o1[a1] = c1[a1] - (m1[a1] - f1[a1]) * d1;
                        return o1;
                    }
                    return c1 - (m1 - f1) * d1;
                }
                if ("continue" === t1) {
                    var u1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), y1 = this.getValueAtTime((p1 + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(n1 = (o1 = new Array(u1.length)).length, a1 = 0; a1 < n1; a1 += 1)o1[a1] = u1[a1] + (u1[a1] - y1[a1]) * (p1 - h1) / .001;
                        return o1;
                    }
                    return u1 + (u1 - y1) * (p1 - h1) / .001;
                }
            }
            return this.getValueAtTime((i1 - (p1 - h1) % i1 + p1) / this.comp.globalData.frameRate, 0);
        }
        function r1(t1, e1) {
            if (!this.k) return this.pv;
            if (t1 = .5 * (t1 || .4), (e1 = Math.floor(e1 || 5)) <= 1) return this.pv;
            var r1, i1, s1 = this.comp.renderedFrame / this.comp.globalData.frameRate, a1 = s1 - t1, n1 = 1 < e1 ? (s1 + t1 - a1) / (e1 - 1) : 1, o1 = 0, h1 = 0;
            for(r1 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o1 < e1;){
                if (i1 = this.getValueAtTime(a1 + o1 * n1), this.pv.length) for(h1 = 0; h1 < this.pv.length; h1 += 1)r1[h1] += i1[h1];
                else r1 += i1;
                o1 += 1;
            }
            if (this.pv.length) for(h1 = 0; h1 < this.pv.length; h1 += 1)r1[h1] /= e1;
            else r1 /= e1;
            return r1;
        }
        function i1() {}
        var s1 = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(t1, e1, r1) {
            var i1 = s1(t1, e1, r1);
            return i1.dynamicProperties.length ? i1.getValueAtTime = (function(t1) {
                console.warn("Transform at time not supported");
            }).bind(i1) : i1.getValueAtTime = (function(t1) {}).bind(i1), i1.setGroupProperty = expressionHelpers.setGroupProperty, i1;
        };
        var a1 = PropertyFactory.getProp;
        PropertyFactory.getProp = function(i1, s1, n1, o1, h1) {
            var l1 = a1(i1, s1, n1, o1, h1);
            l1.kf ? l1.getValueAtTime = expressionHelpers.getValueAtTime.bind(l1) : l1.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l1), l1.setGroupProperty = expressionHelpers.setGroupProperty, l1.loopOut = t1, l1.loopIn = e1, l1.smooth = r1, l1.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l1), l1.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l1), l1.numKeys = 1 === s1.a ? s1.k.length : 0, l1.propertyIndex = s1.ix;
            var p1 = 0;
            return 0 !== n1 && (p1 = createTypedArray("float32", 1 === s1.a ? s1.k[0].s.length : s1.k.length)), l1._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: p1
            }, expressionHelpers.searchExpressions(i1, s1, l1), l1.k && h1.addDynamicProperty(l1), l1;
        };
        var n1 = ShapePropertyFactory.getConstructorFunction(), o1 = ShapePropertyFactory.getKeyframedConstructorFunction();
        i1.prototype = {
            vertices: function(t1, e1) {
                this.k && this.getValue();
                var r1 = this.v;
                void 0 !== e1 && (r1 = this.getValueAtTime(e1, 0));
                var i1, s1 = r1._length, a1 = r1[t1], n1 = r1.v, o1 = createSizedArray(s1);
                for(i1 = 0; i1 < s1; i1 += 1)o1[i1] = "i" === t1 || "o" === t1 ? [
                    a1[i1][0] - n1[i1][0],
                    a1[i1][1] - n1[i1][1]
                ] : [
                    a1[i1][0],
                    a1[i1][1]
                ];
                return o1;
            },
            points: function(t1) {
                return this.vertices("v", t1);
            },
            inTangents: function(t1) {
                return this.vertices("i", t1);
            },
            outTangents: function(t1) {
                return this.vertices("o", t1);
            },
            isClosed: function() {
                return this.v.c;
            },
            pointOnPath: function(t1, e1) {
                var r1 = this.v;
                void 0 !== e1 && (r1 = this.getValueAtTime(e1, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r1));
                for(var i1, s1 = this._segmentsLength, a1 = s1.lengths, n1 = s1.totalLength * t1, o1 = 0, h1 = a1.length, l1 = 0; o1 < h1;){
                    if (l1 + a1[o1].addedLength > n1) {
                        var p1 = o1, f1 = r1.c && o1 === h1 - 1 ? 0 : o1 + 1, m1 = (n1 - l1) / a1[o1].addedLength;
                        i1 = bez.getPointInSegment(r1.v[p1], r1.v[f1], r1.o[p1], r1.i[f1], m1, a1[o1]);
                        break;
                    }
                    l1 += a1[o1].addedLength, o1 += 1;
                }
                return i1 || (i1 = r1.c ? [
                    r1.v[0][0],
                    r1.v[0][1]
                ] : [
                    r1.v[r1._length - 1][0],
                    r1.v[r1._length - 1][1]
                ]), i1;
            },
            vectorOnPath: function(t1, e1, r1) {
                t1 = 1 == t1 ? this.v.c ? 0 : .999 : t1;
                var i1 = this.pointOnPath(t1, e1), s1 = this.pointOnPath(t1 + .001, e1), a1 = s1[0] - i1[0], n1 = s1[1] - i1[1], o1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(n1, 2));
                return 0 === o1 ? [
                    0,
                    0
                ] : "tangent" === r1 ? [
                    a1 / o1,
                    n1 / o1
                ] : [
                    -n1 / o1,
                    a1 / o1
                ];
            },
            tangentOnPath: function(t1, e1) {
                return this.vectorOnPath(t1, e1, "tangent");
            },
            normalOnPath: function(t1, e1) {
                return this.vectorOnPath(t1, e1, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([
            i1
        ], n1), extendPrototype([
            i1
        ], o1), o1.prototype.getValueAtTime = function(t1) {
            return this._cachingAtTime || (this._cachingAtTime = {
                shapeValue: shape_pool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
            }), t1 *= this.elem.globalData.frameRate, (t1 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t1 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t1, this.interpolateShape(t1, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
        }, o1.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var h1 = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(t1, e1, r1, i1, s1) {
            var a1 = h1(t1, e1, r1, i1, s1);
            return a1.propertyIndex = e1.ix, a1.lock = !1, 3 === r1 ? expressionHelpers.searchExpressions(t1, e1.pt, a1) : 4 === r1 && expressionHelpers.searchExpressions(t1, e1.ks, a1), a1.k && t1.addDynamicProperty(a1), a1;
        };
    }(), TextProperty.prototype.getExpressionValue = function(t1, e1) {
        var r1 = this.calculateExpression(e1);
        if (t1.t === r1) return t1;
        var i1 = {};
        return this.copyData(i1, t1), i1.t = r1.toString(), i1.__complete = !1, i1;
    }, TextProperty.prototype.searchProperty = function() {
        var t1 = this.searchKeyframes(), e1 = this.searchExpressions();
        return this.kf = t1 || e1, this.kf;
    }, TextProperty.prototype.searchExpressions = function() {
        if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0;
    };
    var ShapePathInterface = function(t1, e1, r1) {
        function i1(t1) {
            if ("Shape" === t1 || "shape" === t1 || "Path" === t1 || "path" === t1 || "ADBE Vector Shape" === t1 || 2 === t1) return i1.path;
        }
        var s1 = e1.sh, a1 = propertyGroupFactory(i1, r1);
        return s1.setGroupProperty(PropertyInterface("Path", a1)), Object.defineProperties(i1, {
            path: {
                get: function() {
                    return s1.k && s1.getValue(), s1;
                }
            },
            shape: {
                get: function() {
                    return s1.k && s1.getValue(), s1;
                }
            },
            _name: {
                value: t1.nm
            },
            ix: {
                value: t1.ix
            },
            propertyIndex: {
                value: t1.ix
            },
            mn: {
                value: t1.mn
            },
            propertyGroup: {
                value: r1
            }
        }), i1;
    }, propertyGroupFactory = function(t1, e1) {
        return function(r1) {
            return (r1 = void 0 === r1 ? 1 : r1) <= 0 ? t1 : e1(r1 - 1);
        };
    }, PropertyInterface = function(t1, e1) {
        var r1 = {
            _name: t1
        };
        return function(t1) {
            return (t1 = void 0 === t1 ? 1 : t1) <= 0 ? r1 : e1(--t1);
        };
    }, ShapeExpressionInterface = function() {
        function t1(t1, a1, f1) {
            var m1, c1 = [], d1 = t1 ? t1.length : 0;
            for(m1 = 0; m1 < d1; m1 += 1)"gr" == t1[m1].ty ? c1.push(e1(t1[m1], a1[m1], f1)) : "fl" == t1[m1].ty ? c1.push(r1(t1[m1], a1[m1], f1)) : "st" == t1[m1].ty ? c1.push(i1(t1[m1], a1[m1], f1)) : "tm" == t1[m1].ty ? c1.push(s1(t1[m1], a1[m1], f1)) : "tr" == t1[m1].ty || ("el" == t1[m1].ty ? c1.push(n1(t1[m1], a1[m1], f1)) : "sr" == t1[m1].ty ? c1.push(o1(t1[m1], a1[m1], f1)) : "sh" == t1[m1].ty ? c1.push(ShapePathInterface(t1[m1], a1[m1], f1)) : "rc" == t1[m1].ty ? c1.push(h1(t1[m1], a1[m1], f1)) : "rd" == t1[m1].ty ? c1.push(l1(t1[m1], a1[m1], f1)) : "rp" == t1[m1].ty && c1.push(p1(t1[m1], a1[m1], f1)));
            return c1;
        }
        function e1(e1, r1, i1) {
            var s1 = function(t1) {
                switch(t1){
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                        return s1.content;
                    default:
                        return s1.transform;
                }
            };
            s1.propertyGroup = propertyGroupFactory(s1, i1);
            var n1 = function(e1, r1, i1) {
                var s1, n1 = function(t1) {
                    for(var e1 = 0, r1 = s1.length; e1 < r1;){
                        if (s1[e1]._name === t1 || s1[e1].mn === t1 || s1[e1].propertyIndex === t1 || s1[e1].ix === t1 || s1[e1].ind === t1) return s1[e1];
                        e1 += 1;
                    }
                    if ("number" == typeof t1) return s1[t1 - 1];
                };
                n1.propertyGroup = propertyGroupFactory(n1, i1), s1 = t1(e1.it, r1.it, n1.propertyGroup), n1.numProperties = s1.length;
                var o1 = a1(e1.it[e1.it.length - 1], r1.it[r1.it.length - 1], n1.propertyGroup);
                return n1.transform = o1, n1.propertyIndex = e1.cix, n1._name = e1.nm, n1;
            }(e1, r1, s1.propertyGroup), o1 = a1(e1.it[e1.it.length - 1], r1.it[r1.it.length - 1], s1.propertyGroup);
            return s1.content = n1, s1.transform = o1, Object.defineProperty(s1, "_name", {
                get: function() {
                    return e1.nm;
                }
            }), s1.numProperties = e1.np, s1.propertyIndex = e1.ix, s1.nm = e1.nm, s1.mn = e1.mn, s1;
        }
        function r1(t1, e1, r1) {
            function i1(t1) {
                return "Color" === t1 || "color" === t1 ? i1.color : "Opacity" === t1 || "opacity" === t1 ? i1.opacity : void 0;
            }
            return Object.defineProperties(i1, {
                color: {
                    get: ExpressionPropertyInterface(e1.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(e1.o)
                },
                _name: {
                    value: t1.nm
                },
                mn: {
                    value: t1.mn
                }
            }), e1.c.setGroupProperty(PropertyInterface("Color", r1)), e1.o.setGroupProperty(PropertyInterface("Opacity", r1)), i1;
        }
        function i1(t1, e1, r1) {
            function i1(t1) {
                return "Color" === t1 || "color" === t1 ? i1.color : "Opacity" === t1 || "opacity" === t1 ? i1.opacity : "Stroke Width" === t1 || "stroke width" === t1 ? i1.strokeWidth : void 0;
            }
            var s1, a1, n1 = propertyGroupFactory(i1, r1), o1 = propertyGroupFactory(l1, n1), h1 = t1.d ? t1.d.length : 0, l1 = {};
            for(s1 = 0; s1 < h1; s1 += 1)a1 = s1, Object.defineProperty(l1, t1.d[a1].nm, {
                get: ExpressionPropertyInterface(e1.d.dataProps[a1].p)
            }), e1.d.dataProps[s1].p.setGroupProperty(o1);
            return Object.defineProperties(i1, {
                color: {
                    get: ExpressionPropertyInterface(e1.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(e1.o)
                },
                strokeWidth: {
                    get: ExpressionPropertyInterface(e1.w)
                },
                dash: {
                    get: function() {
                        return l1;
                    }
                },
                _name: {
                    value: t1.nm
                },
                mn: {
                    value: t1.mn
                }
            }), e1.c.setGroupProperty(PropertyInterface("Color", n1)), e1.o.setGroupProperty(PropertyInterface("Opacity", n1)), e1.w.setGroupProperty(PropertyInterface("Stroke Width", n1)), i1;
        }
        function s1(t1, e1, r1) {
            function i1(e1) {
                return e1 === t1.e.ix || "End" === e1 || "end" === e1 ? i1.end : e1 === t1.s.ix ? i1.start : e1 === t1.o.ix ? i1.offset : void 0;
            }
            var s1 = propertyGroupFactory(i1, r1);
            return i1.propertyIndex = t1.ix, e1.s.setGroupProperty(PropertyInterface("Start", s1)), e1.e.setGroupProperty(PropertyInterface("End", s1)), e1.o.setGroupProperty(PropertyInterface("Offset", s1)), i1.propertyIndex = t1.ix, i1.propertyGroup = r1, Object.defineProperties(i1, {
                start: {
                    get: ExpressionPropertyInterface(e1.s)
                },
                end: {
                    get: ExpressionPropertyInterface(e1.e)
                },
                offset: {
                    get: ExpressionPropertyInterface(e1.o)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        function a1(t1, e1, r1) {
            function i1(e1) {
                return t1.a.ix === e1 || "Anchor Point" === e1 ? i1.anchorPoint : t1.o.ix === e1 || "Opacity" === e1 ? i1.opacity : t1.p.ix === e1 || "Position" === e1 ? i1.position : t1.r.ix === e1 || "Rotation" === e1 || "ADBE Vector Rotation" === e1 ? i1.rotation : t1.s.ix === e1 || "Scale" === e1 ? i1.scale : t1.sk && t1.sk.ix === e1 || "Skew" === e1 ? i1.skew : t1.sa && t1.sa.ix === e1 || "Skew Axis" === e1 ? i1.skewAxis : void 0;
            }
            var s1 = propertyGroupFactory(i1, r1);
            return e1.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s1)), e1.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s1)), e1.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s1)), e1.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s1)), e1.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s1)), e1.transform.mProps.sk && (e1.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s1)), e1.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s1))), e1.transform.op.setGroupProperty(PropertyInterface("Opacity", s1)), Object.defineProperties(i1, {
                opacity: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.o)
                },
                position: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.p)
                },
                anchorPoint: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.a)
                },
                scale: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.s)
                },
                rotation: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.r)
                },
                skew: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.sk)
                },
                skewAxis: {
                    get: ExpressionPropertyInterface(e1.transform.mProps.sa)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.ty = "tr", i1.mn = t1.mn, i1.propertyGroup = r1, i1;
        }
        function n1(t1, e1, r1) {
            function i1(e1) {
                return t1.p.ix === e1 ? i1.position : t1.s.ix === e1 ? i1.size : void 0;
            }
            var s1 = propertyGroupFactory(i1, r1);
            i1.propertyIndex = t1.ix;
            var a1 = "tm" === e1.sh.ty ? e1.sh.prop : e1.sh;
            return a1.s.setGroupProperty(PropertyInterface("Size", s1)), a1.p.setGroupProperty(PropertyInterface("Position", s1)), Object.defineProperties(i1, {
                size: {
                    get: ExpressionPropertyInterface(a1.s)
                },
                position: {
                    get: ExpressionPropertyInterface(a1.p)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        function o1(t1, e1, r1) {
            function i1(e1) {
                return t1.p.ix === e1 ? i1.position : t1.r.ix === e1 ? i1.rotation : t1.pt.ix === e1 ? i1.points : t1.or.ix === e1 || "ADBE Vector Star Outer Radius" === e1 ? i1.outerRadius : t1.os.ix === e1 ? i1.outerRoundness : !t1.ir || t1.ir.ix !== e1 && "ADBE Vector Star Inner Radius" !== e1 ? t1.is && t1.is.ix === e1 ? i1.innerRoundness : void 0 : i1.innerRadius;
            }
            var s1 = propertyGroupFactory(i1, r1), a1 = "tm" === e1.sh.ty ? e1.sh.prop : e1.sh;
            return i1.propertyIndex = t1.ix, a1.or.setGroupProperty(PropertyInterface("Outer Radius", s1)), a1.os.setGroupProperty(PropertyInterface("Outer Roundness", s1)), a1.pt.setGroupProperty(PropertyInterface("Points", s1)), a1.p.setGroupProperty(PropertyInterface("Position", s1)), a1.r.setGroupProperty(PropertyInterface("Rotation", s1)), t1.ir && (a1.ir.setGroupProperty(PropertyInterface("Inner Radius", s1)), a1.is.setGroupProperty(PropertyInterface("Inner Roundness", s1))), Object.defineProperties(i1, {
                position: {
                    get: ExpressionPropertyInterface(a1.p)
                },
                rotation: {
                    get: ExpressionPropertyInterface(a1.r)
                },
                points: {
                    get: ExpressionPropertyInterface(a1.pt)
                },
                outerRadius: {
                    get: ExpressionPropertyInterface(a1.or)
                },
                outerRoundness: {
                    get: ExpressionPropertyInterface(a1.os)
                },
                innerRadius: {
                    get: ExpressionPropertyInterface(a1.ir)
                },
                innerRoundness: {
                    get: ExpressionPropertyInterface(a1.is)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        function h1(t1, e1, r1) {
            function i1(e1) {
                return t1.p.ix === e1 ? i1.position : t1.r.ix === e1 ? i1.roundness : t1.s.ix === e1 || "Size" === e1 || "ADBE Vector Rect Size" === e1 ? i1.size : void 0;
            }
            var s1 = propertyGroupFactory(i1, r1), a1 = "tm" === e1.sh.ty ? e1.sh.prop : e1.sh;
            return i1.propertyIndex = t1.ix, a1.p.setGroupProperty(PropertyInterface("Position", s1)), a1.s.setGroupProperty(PropertyInterface("Size", s1)), a1.r.setGroupProperty(PropertyInterface("Rotation", s1)), Object.defineProperties(i1, {
                position: {
                    get: ExpressionPropertyInterface(a1.p)
                },
                roundness: {
                    get: ExpressionPropertyInterface(a1.r)
                },
                size: {
                    get: ExpressionPropertyInterface(a1.s)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        function l1(t1, e1, r1) {
            function i1(e1) {
                if (t1.r.ix === e1 || "Round Corners 1" === e1) return i1.radius;
            }
            var s1 = propertyGroupFactory(i1, r1), a1 = e1;
            return i1.propertyIndex = t1.ix, a1.rd.setGroupProperty(PropertyInterface("Radius", s1)), Object.defineProperties(i1, {
                radius: {
                    get: ExpressionPropertyInterface(a1.rd)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        function p1(t1, e1, r1) {
            function i1(e1) {
                return t1.c.ix === e1 || "Copies" === e1 ? i1.copies : t1.o.ix === e1 || "Offset" === e1 ? i1.offset : void 0;
            }
            var s1 = propertyGroupFactory(i1, r1), a1 = e1;
            return i1.propertyIndex = t1.ix, a1.c.setGroupProperty(PropertyInterface("Copies", s1)), a1.o.setGroupProperty(PropertyInterface("Offset", s1)), Object.defineProperties(i1, {
                copies: {
                    get: ExpressionPropertyInterface(a1.c)
                },
                offset: {
                    get: ExpressionPropertyInterface(a1.o)
                },
                _name: {
                    value: t1.nm
                }
            }), i1.mn = t1.mn, i1;
        }
        return function(e1, r1, i1) {
            function s1(t1) {
                if ("number" == typeof t1) return 0 === (t1 = void 0 === t1 ? 1 : t1) ? i1 : a1[t1 - 1];
                for(var e1 = 0, r1 = a1.length; e1 < r1;){
                    if (a1[e1]._name === t1) return a1[e1];
                    e1 += 1;
                }
            }
            var a1;
            return s1.propertyGroup = i1, a1 = t1(e1, r1, s1), s1.numProperties = a1.length, s1;
        };
    }(), TextExpressionInterface = function(t1) {
        function e1() {}
        var r1;
        return Object.defineProperty(e1, "sourceText", {
            get: function() {
                t1.textProperty.getValue();
                var e1 = t1.textProperty.currentData.t;
                return void 0 !== e1 && (t1.textProperty.currentData.t = void 0, (r1 = new String(e1)).value = e1 || new String(e1)), r1;
            }
        }), e1;
    }, LayerExpressionInterface = function() {
        function t1(t1, e1) {
            var r1 = new Matrix;
            if (r1.reset(), this._elem.finalTransform.mProp.applyToMatrix(r1), this._elem.hierarchy && this._elem.hierarchy.length) {
                var i1, s1 = this._elem.hierarchy.length;
                for(i1 = 0; i1 < s1; i1 += 1)this._elem.hierarchy[i1].finalTransform.mProp.applyToMatrix(r1);
                return r1.applyToPointArray(t1[0], t1[1], t1[2] || 0);
            }
            return r1.applyToPointArray(t1[0], t1[1], t1[2] || 0);
        }
        function e1(t1, e1) {
            var r1 = new Matrix;
            if (r1.reset(), this._elem.finalTransform.mProp.applyToMatrix(r1), this._elem.hierarchy && this._elem.hierarchy.length) {
                var i1, s1 = this._elem.hierarchy.length;
                for(i1 = 0; i1 < s1; i1 += 1)this._elem.hierarchy[i1].finalTransform.mProp.applyToMatrix(r1);
                return r1.inversePoint(t1);
            }
            return r1.inversePoint(t1);
        }
        function r1(t1) {
            var e1 = new Matrix;
            if (e1.reset(), this._elem.finalTransform.mProp.applyToMatrix(e1), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r1, i1 = this._elem.hierarchy.length;
                for(r1 = 0; r1 < i1; r1 += 1)this._elem.hierarchy[r1].finalTransform.mProp.applyToMatrix(e1);
                return e1.inversePoint(t1);
            }
            return e1.inversePoint(t1);
        }
        function i1() {
            return [
                1,
                1,
                1,
                1
            ];
        }
        return function(s1) {
            function a1(t1) {
                switch(t1){
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return a1.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return n1;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return a1.effect;
                }
            }
            var n1;
            a1.toWorld = t1, a1.fromWorld = e1, a1.toComp = t1, a1.fromComp = r1, a1.sampleImage = i1, a1.sourceRectAtTime = s1.sourceRectAtTime.bind(s1);
            var o1 = getDescriptor(n1 = TransformExpressionInterface((a1._elem = s1).finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(a1, {
                hasParent: {
                    get: function() {
                        return s1.hierarchy.length;
                    }
                },
                parent: {
                    get: function() {
                        return s1.hierarchy[0].layerInterface;
                    }
                },
                rotation: getDescriptor(n1, "rotation"),
                scale: getDescriptor(n1, "scale"),
                position: getDescriptor(n1, "position"),
                opacity: getDescriptor(n1, "opacity"),
                anchorPoint: o1,
                anchor_point: o1,
                transform: {
                    get: function() {
                        return n1;
                    }
                },
                active: {
                    get: function() {
                        return s1.isInRange;
                    }
                }
            }), a1.startTime = s1.data.st, a1.index = s1.data.ind, a1.source = s1.data.refId, a1.height = 0 === s1.data.ty ? s1.data.h : 100, a1.width = 0 === s1.data.ty ? s1.data.w : 100, a1.inPoint = s1.data.ip / s1.comp.globalData.frameRate, a1.outPoint = s1.data.op / s1.comp.globalData.frameRate, a1._name = s1.data.nm, a1.registerMaskInterface = function(t1) {
                a1.mask = new MaskManagerInterface(t1, s1);
            }, a1.registerEffectsInterface = function(t1) {
                a1.effect = t1;
            }, a1;
        };
    }(), CompExpressionInterface = function(t1) {
        function e1(e1) {
            for(var r1 = 0, i1 = t1.layers.length; r1 < i1;){
                if (t1.layers[r1].nm === e1 || t1.layers[r1].ind === e1) return t1.elements[r1].layerInterface;
                r1 += 1;
            }
            return null;
        }
        return Object.defineProperty(e1, "_name", {
            value: t1.data.nm
        }), (e1.layer = e1).pixelAspect = 1, e1.height = t1.data.h || t1.globalData.compSize.h, e1.width = t1.data.w || t1.globalData.compSize.w, e1.pixelAspect = 1, e1.frameDuration = 1 / t1.globalData.frameRate, e1.displayStartTime = 0, e1.numLayers = t1.layers.length, e1;
    }, TransformExpressionInterface = function(t1) {
        function e1(t1) {
            switch(t1){
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                    return e1.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                    return e1.rotation;
                case "ADBE Rotate X":
                    return e1.xRotation;
                case "ADBE Rotate Y":
                    return e1.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                    return e1.position;
                case "ADBE Position_0":
                    return e1.xPosition;
                case "ADBE Position_1":
                    return e1.yPosition;
                case "ADBE Position_2":
                    return e1.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                    return e1.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                    return e1.opacity;
            }
        }
        if (Object.defineProperty(e1, "rotation", {
            get: ExpressionPropertyInterface(t1.r || t1.rz)
        }), Object.defineProperty(e1, "zRotation", {
            get: ExpressionPropertyInterface(t1.rz || t1.r)
        }), Object.defineProperty(e1, "xRotation", {
            get: ExpressionPropertyInterface(t1.rx)
        }), Object.defineProperty(e1, "yRotation", {
            get: ExpressionPropertyInterface(t1.ry)
        }), Object.defineProperty(e1, "scale", {
            get: ExpressionPropertyInterface(t1.s)
        }), t1.p) var r1 = ExpressionPropertyInterface(t1.p);
        else {
            var i1, s1 = ExpressionPropertyInterface(t1.px), a1 = ExpressionPropertyInterface(t1.py);
            t1.pz && (i1 = ExpressionPropertyInterface(t1.pz));
        }
        return Object.defineProperty(e1, "position", {
            get: function() {
                return t1.p ? r1() : [
                    s1(),
                    a1(),
                    i1 ? i1() : 0
                ];
            }
        }), Object.defineProperty(e1, "xPosition", {
            get: ExpressionPropertyInterface(t1.px)
        }), Object.defineProperty(e1, "yPosition", {
            get: ExpressionPropertyInterface(t1.py)
        }), Object.defineProperty(e1, "zPosition", {
            get: ExpressionPropertyInterface(t1.pz)
        }), Object.defineProperty(e1, "anchorPoint", {
            get: ExpressionPropertyInterface(t1.a)
        }), Object.defineProperty(e1, "opacity", {
            get: ExpressionPropertyInterface(t1.o)
        }), Object.defineProperty(e1, "skew", {
            get: ExpressionPropertyInterface(t1.sk)
        }), Object.defineProperty(e1, "skewAxis", {
            get: ExpressionPropertyInterface(t1.sa)
        }), Object.defineProperty(e1, "orientation", {
            get: ExpressionPropertyInterface(t1.or)
        }), e1;
    }, ProjectInterface = function() {
        function t1(t1) {
            this.compositions.push(t1);
        }
        return function() {
            function e1(t1) {
                for(var e1 = 0, r1 = this.compositions.length; e1 < r1;){
                    if (this.compositions[e1].data && this.compositions[e1].data.nm === t1) return this.compositions[e1].prepareFrame && this.compositions[e1].data.xt && this.compositions[e1].prepareFrame(this.currentFrame), this.compositions[e1].compInterface;
                    e1 += 1;
                }
            }
            return e1.compositions = [], e1.currentFrame = 0, e1.registerComposition = t1, e1;
        };
    }(), EffectsExpressionInterface = function() {
        function t1(r1, i1, s1, a1) {
            function n1(t1) {
                for(var e1 = r1.ef, i1 = 0, s1 = e1.length; i1 < s1;){
                    if (t1 === e1[i1].nm || t1 === e1[i1].mn || t1 === e1[i1].ix) return 5 === e1[i1].ty ? l1[i1] : l1[i1]();
                    i1 += 1;
                }
                return l1[0]();
            }
            var o1, h1 = propertyGroupFactory(n1, s1), l1 = [], p1 = r1.ef.length;
            for(o1 = 0; o1 < p1; o1 += 1)5 === r1.ef[o1].ty ? l1.push(t1(r1.ef[o1], i1.effectElements[o1], i1.effectElements[o1].propertyGroup, a1)) : l1.push(e1(i1.effectElements[o1], r1.ef[o1].ty, a1, h1));
            return "ADBE Color Control" === r1.mn && Object.defineProperty(n1, "color", {
                get: function() {
                    return l1[0]();
                }
            }), Object.defineProperties(n1, {
                numProperties: {
                    get: function() {
                        return r1.np;
                    }
                },
                _name: {
                    value: r1.nm
                },
                propertyGroup: {
                    value: h1
                }
            }), n1.active = n1.enabled = 0 !== r1.en, n1;
        }
        function e1(t1, e1, r1, i1) {
            var s1 = ExpressionPropertyInterface(t1.p);
            return t1.p.setGroupProperty && t1.p.setGroupProperty(PropertyInterface("", i1)), function() {
                return 10 === e1 ? r1.comp.compInterface(t1.p.v) : s1();
            };
        }
        return {
            createEffectsInterface: function(e1, r1) {
                if (e1.effectsManager) {
                    var i1, s1 = [], a1 = e1.data.ef, n1 = e1.effectsManager.effectElements.length;
                    for(i1 = 0; i1 < n1; i1 += 1)s1.push(t1(a1[i1], e1.effectsManager.effectElements[i1], r1, e1));
                    var o1 = e1.data.ef || [], h1 = function(t1) {
                        for(i1 = 0, n1 = o1.length; i1 < n1;){
                            if (t1 === o1[i1].nm || t1 === o1[i1].mn || t1 === o1[i1].ix) return s1[i1];
                            i1 += 1;
                        }
                    };
                    return Object.defineProperty(h1, "numProperties", {
                        get: function() {
                            return o1.length;
                        }
                    }), h1;
                }
            }
        };
    }(), MaskManagerInterface = function() {
        function t1(t1, e1) {
            this._mask = t1, this._data = e1;
        }
        return Object.defineProperty(t1.prototype, "maskPath", {
            get: function() {
                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
            }
        }), Object.defineProperty(t1.prototype, "maskOpacity", {
            get: function() {
                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
            }
        }), function(e1, r1) {
            var i1, s1 = createSizedArray(e1.viewData.length), a1 = e1.viewData.length;
            for(i1 = 0; i1 < a1; i1 += 1)s1[i1] = new t1(e1.viewData[i1], e1.masksProperties[i1]);
            return function(t1) {
                for(i1 = 0; i1 < a1;){
                    if (e1.masksProperties[i1].nm === t1) return s1[i1];
                    i1 += 1;
                }
            };
        };
    }(), ExpressionPropertyInterface = function() {
        function t1(t1, e1, r1) {
            Object.defineProperty(t1, "velocity", {
                get: function() {
                    return e1.getVelocityAtTime(e1.comp.currentFrame);
                }
            }), t1.numKeys = e1.keyframes ? e1.keyframes.length : 0, t1.key = function(i1) {
                if (t1.numKeys) {
                    var s1 = "";
                    s1 = "s" in e1.keyframes[i1 - 1] ? e1.keyframes[i1 - 1].s : "e" in e1.keyframes[i1 - 2] ? e1.keyframes[i1 - 2].e : e1.keyframes[i1 - 2].s;
                    var a1 = "unidimensional" === r1 ? new Number(s1) : Object.assign({}, s1);
                    return a1.time = e1.keyframes[i1 - 1].t / e1.elem.comp.globalData.frameRate, a1;
                }
                return 0;
            }, t1.valueAtTime = e1.getValueAtTime, t1.speedAtTime = e1.getSpeedAtTime, t1.velocityAtTime = e1.getVelocityAtTime, t1.propertyGroup = e1.propertyGroup;
        }
        function e1() {
            return r1;
        }
        var r1 = {
            pv: 0,
            v: 0,
            mult: 1
        }, i1 = {
            pv: [
                0,
                0,
                0
            ],
            v: [
                0,
                0,
                0
            ],
            mult: 1
        };
        return function(s1) {
            return s1 ? "unidimensional" === s1.propType ? function(e1) {
                e1 && "pv" in e1 || (e1 = r1);
                var i1 = 1 / e1.mult, s1 = e1.pv * i1, a1 = new Number(s1);
                return a1.value = s1, t1(a1, e1, "unidimensional"), function() {
                    return e1.k && e1.getValue(), s1 = e1.v * i1, a1.value !== s1 && ((a1 = new Number(s1)).value = s1, t1(a1, e1, "unidimensional")), a1;
                };
            }(s1) : function(e1) {
                e1 && "pv" in e1 || (e1 = i1);
                var r1 = 1 / e1.mult, s1 = e1.pv.length, a1 = createTypedArray("float32", s1), n1 = createTypedArray("float32", s1);
                return a1.value = n1, t1(a1, e1, "multidimensional"), function() {
                    e1.k && e1.getValue();
                    for(var t1 = 0; t1 < s1; t1 += 1)a1[t1] = n1[t1] = e1.v[t1] * r1;
                    return a1;
                };
            }(s1) : e1;
        };
    }(), b6, c6;
    b6 = function() {
        function t1(t1, e1) {
            return this.textIndex = t1 + 1, this.textTotal = e1, this.v = this.getValue() * this.mult, this.v;
        }
        return function(e1, r1) {
            this.pv = 1, this.comp = e1.comp, this.elem = e1, this.mult = .01, this.propType = "textSelector", this.textTotal = r1.totalChars, this.selectorValue = 100, this.lastValue = [
                1,
                1,
                1
            ], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e1, r1, this), this.getMult = t1, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
        };
    }(), c6 = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t1, e1, r1) {
        return 1 === e1.t ? new b6(t1, e1, r1) : c6(t1, e1, r1);
    }, extendPrototype([
        DynamicPropertyContainer
    ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t1, e1) {
        this.data = t1, this.effectElements = [], this.initDynamicPropertyContainer(e1);
        var r1, i1, s1 = this.data.ef.length, a1 = this.data.ef;
        for(r1 = 0; r1 < s1; r1 += 1){
            switch(i1 = null, a1[r1].ty){
                case 0:
                    i1 = new SliderEffect(a1[r1], e1, this);
                    break;
                case 1:
                    i1 = new AngleEffect(a1[r1], e1, this);
                    break;
                case 2:
                    i1 = new ColorEffect(a1[r1], e1, this);
                    break;
                case 3:
                    i1 = new PointEffect(a1[r1], e1, this);
                    break;
                case 4:
                case 7:
                    i1 = new CheckboxEffect(a1[r1], e1, this);
                    break;
                case 10:
                    i1 = new LayerIndexEffect(a1[r1], e1, this);
                    break;
                case 11:
                    i1 = new MaskIndexEffect(a1[r1], e1, this);
                    break;
                case 5:
                    i1 = new EffectsManager(a1[r1], e1, this);
                    break;
                default:
                    i1 = new NoValueEffect(a1[r1], e1, this);
            }
            i1 && this.effectElements.push(i1);
        }
    };
    var lottie = {}, _isFrozen = !1;
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.1";
    var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
            src: ""
        }, queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie;
});

//# sourceMappingURL=index.b6593869.js.map
