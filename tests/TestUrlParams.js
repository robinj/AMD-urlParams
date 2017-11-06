require(['urlParams'],function(params){
  QUnit.module("Basic Parameters");

  QUnit.test("simple", function(assert) {
    params.parse('foo=bar')
    assert.equal(params.get('foo'),'bar');
  });
  QUnit.test("multiple", function(assert) {
    params.parse('foo=bar&baz=qux')
    assert.equal(params.get('foo'),'bar');
    assert.equal(params.get('baz'),'qux');
  });
  QUnit.test("array", function(assert) {
    params.parse('foo=a&foo=b')
    assert.deepEqual(params.get('foo'),['a','b']);
  });
  QUnit.test("encoded", function(assert) {
    params.parse('?foo=a%20b&bar=a+b&baz=%26')
    assert.equal(params.get('foo'),'a b');
    assert.equal(params.get('bar'),'a b');
    assert.equal(params.get('baz'),'&');
  });
  QUnit.test("semi colon", function(assert) {
    params.parse('?foo=a%20b;bar=a+b;baz=%26')
    assert.equal(params.get('foo'),'a b');
    assert.equal(params.get('bar'),'a b');
    assert.equal(params.get('baz'),'&');
  });
})