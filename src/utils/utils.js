// 简单深拷贝 只支持对象 和 数组
export function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);

    const keys = isArray ? undefined : Object.keys(target);
    Array.prototype.forEach.call(keys || target, (value, key) => {
      if (keys) key = value;
      cloneTarget[key] = deepClone(target[key], map);
    })

    return cloneTarget;
  } else {
    return target;
  }
}