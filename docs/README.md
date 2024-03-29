fluent-iterable - v0.4.1

# fluent-iterable - v0.4.1

## Table of contents

### Type aliases

- [AbstractClass](README.md#abstractclass)
- [AbstractConstructorParameters](README.md#abstractconstructorparameters)
- [AnyIterable](README.md#anyiterable)
- [AnyIterableItem](README.md#anyiterableitem)
- [Args](README.md#args)
- [AsyncIterableItem](README.md#asynciterableitem)
- [Class](README.md#class)
- [ClassMethod](README.md#classmethod)
- [Func](README.md#func)
- [IterableItem](README.md#iterableitem)
- [KeysOfType](README.md#keysoftype)
- [Lenghtable](README.md#lenghtable)
- [Primitive](README.md#primitive)
- [Sizeable](README.md#sizeable)
- [ValueType](README.md#valuetype)

### Functions

- [arrayLength](README.md#arraylength)
- [compareProp](README.md#compareprop)
- [constant](README.md#constant)
- [equal](README.md#equal)
- [greaterOrEqual](README.md#greaterorequal)
- [greaterThan](README.md#greaterthan)
- [hasExactly](README.md#hasexactly)
- [hasLength](README.md#haslength)
- [hasLessOrExactly](README.md#haslessorexactly)
- [hasLessThan](README.md#haslessthan)
- [hasMethod](README.md#hasmethod)
- [hasMethods](README.md#hasmethods)
- [hasMoreOrExactly](README.md#hasmoreorexactly)
- [hasMoreThan](README.md#hasmorethan)
- [hasProperties](README.md#hasproperties)
- [hasProperty](README.md#hasproperty)
- [hasSize](README.md#hassize)
- [hasTruthyProperties](README.md#hastruthyproperties)
- [hasTruthyProperty](README.md#hastruthyproperty)
- [identity](README.md#identity)
- [index](README.md#index)
- [isAnyIterable](README.md#isanyiterable)
- [isArray](README.md#isarray)
- [isAsyncIterable](README.md#isasynciterable)
- [isBoolean](README.md#isboolean)
- [isClass](README.md#isclass)
- [isFalsy](README.md#isfalsy)
- [isFunction](README.md#isfunction)
- [isIterable](README.md#isiterable)
- [isKeyOf](README.md#iskeyof)
- [isNull](README.md#isnull)
- [isNumber](README.md#isnumber)
- [isOnlyIterable](README.md#isonlyiterable)
- [isPromise](README.md#ispromise)
- [isPromiseLike](README.md#ispromiselike)
- [isString](README.md#isstring)
- [isTruthy](README.md#istruthy)
- [length](README.md#length)
- [lesserOrEqual](README.md#lesserorequal)
- [lesserThan](README.md#lesserthan)
- [propValue](README.md#propvalue)
- [size](README.md#size)
- [wait](README.md#wait)

## Type aliases

### AbstractClass

Ƭ **AbstractClass**<T\>: (...`args`: [*Args*](README.md#args)) => T

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Type declaration:

\+ (...`args`: [*Args*](README.md#args)): T

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | [*Args*](README.md#args) |

**Returns:** T

___

### AbstractConstructorParameters

Ƭ **AbstractConstructorParameters**<T\>: T *extends* (...`args`: *infer* P) => *any* ? P : *never*

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | (...`args`: *any*) => *any* |

___

### AnyIterable

Ƭ **AnyIterable**<T\>: *Iterable*<T\> \| *AsyncIterable*<T\>

#### Type parameters:

Name |
:------ |
`T` |

___

### AnyIterableItem

Ƭ **AnyIterableItem**<T\>: T *extends* [*AnyIterable*](README.md#anyiterable)<*infer* R\> ? R : *never*

#### Type parameters:

Name |
:------ |
`T` |

___

### Args

Ƭ **Args**: *any*[]

___

### AsyncIterableItem

Ƭ **AsyncIterableItem**<T\>: T *extends* *AsyncIterable*<*infer* R\> ? R : *never*

#### Type parameters:

Name |
:------ |
`T` |

___

### Class

Ƭ **Class**<T\>: (...`args`: [*Args*](README.md#args)) => T

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Type declaration:

\+ (...`args`: [*Args*](README.md#args)): T

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | [*Args*](README.md#args) |

**Returns:** T

___

### ClassMethod

Ƭ **ClassMethod**<T, K\>: T[K]

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | Object |
`K` | [*KeysOfType*](README.md#keysoftype)<T, [*Func*](README.md#func)\> |

___

### Func

Ƭ **Func**<A, R\>: (...`args`: A) => R

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`A` | [*Args*](README.md#args) | [*Args*](README.md#args) |
`R` | - | *any* |

#### Type declaration:

▸ (...`args`: A): R

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | A |

**Returns:** R

___

### IterableItem

Ƭ **IterableItem**<T\>: T *extends* *Iterable*<*infer* R\> ? R : *never*

#### Type parameters:

Name |
:------ |
`T` |

___

### KeysOfType

Ƭ **KeysOfType**<T, V\>: { [K in keyof T]-?: T[K] extends V ? K : never}[keyof T]

#### Type parameters:

Name |
:------ |
`T` |
`V` |

___

### Lenghtable

Ƭ **Lenghtable**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`length` | *number* |

___

### Primitive

Ƭ **Primitive**: [*ValueType*](README.md#valuetype) \| *null* \| *undefined*

___

### Sizeable

Ƭ **Sizeable**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`size` | *number* |

___

### ValueType

Ƭ **ValueType**: *string* \| *boolean* \| *number*

## Functions

### arrayLength

▸ **arrayLength**(`x`: [*Lenghtable*](README.md#lenghtable)): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | [*Lenghtable*](README.md#lenghtable) |

**Returns:** *number*

___

### compareProp

▸ **compareProp**<K, T\>(`k`: K, `comparer`: (`t`: T[K]) => *boolean*): *function*

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K` | *string* \| *number* \| *symbol* | - |
`T` | *object* | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`k` | K |
`comparer` | (`t`: T[K]) => *boolean* |

**Returns:** (`t`: T) => *boolean*

___

### constant

▸ **constant**<T\>(`x`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`x` | T |

**Returns:** () => T

___

### equal

▸ **equal**<T\>(`value`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** (`x`: *unknown*) => *boolean*

___

### greaterOrEqual

▸ **greaterOrEqual**<T\>(`threshold`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | T |

**Returns:** (`x`: T) => *boolean*

___

### greaterThan

▸ **greaterThan**<T\>(`threshold`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | T |

**Returns:** (`x`: T) => *boolean*

___

### hasExactly

▸ **hasExactly**(`threshold`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | *number* |

**Returns:** (`x`: [*Sizeable*](README.md#sizeable) \| [*Lenghtable*](README.md#lenghtable)) => *boolean*

___

### hasLength

▸ **hasLength**(`x`: *unknown*): x is Lenghtable

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *unknown* |

**Returns:** x is Lenghtable

___

### hasLessOrExactly

▸ **hasLessOrExactly**(`threshold`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | *number* |

**Returns:** (`x`: [*Sizeable*](README.md#sizeable) \| [*Lenghtable*](README.md#lenghtable)) => *boolean*

___

### hasLessThan

▸ **hasLessThan**(`threshold`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | *number* |

**Returns:** (`x`: [*Sizeable*](README.md#sizeable) \| [*Lenghtable*](README.md#lenghtable)) => *boolean*

___

### hasMethod

▸ **hasMethod**<T\>(`t`: *any*, `method`: T): t is { [k in string \| number \| symbol]: Func<Args, any\>}

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`method` | T |

**Returns:** t is { [k in string \| number \| symbol]: Func<Args, any\>}

___

### hasMethods

▸ **hasMethods**<T\>(`t`: *any*, ...`args`: T[]): t is { [k in string \| number \| symbol]: Func<Args, any\>}

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`...args` | T[] |

**Returns:** t is { [k in string \| number \| symbol]: Func<Args, any\>}

___

### hasMoreOrExactly

▸ **hasMoreOrExactly**(`threshold`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | *number* |

**Returns:** (`x`: [*Sizeable*](README.md#sizeable) \| [*Lenghtable*](README.md#lenghtable)) => *boolean*

___

### hasMoreThan

▸ **hasMoreThan**(`threshold`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | *number* |

**Returns:** (`x`: [*Sizeable*](README.md#sizeable) \| [*Lenghtable*](README.md#lenghtable)) => *boolean*

___

### hasProperties

▸ **hasProperties**<T\>(`t`: *any*, ...`args`: T[]): t is { [k in string \| number \| symbol]: unknown}

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`...args` | T[] |

**Returns:** t is { [k in string \| number \| symbol]: unknown}

___

### hasProperty

▸ **hasProperty**<P\>(`t`: *any*, `prop`: P): t is { [k in string \| number \| symbol]: unknown}

#### Type parameters:

Name | Type |
:------ | :------ |
`P` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`prop` | P |

**Returns:** t is { [k in string \| number \| symbol]: unknown}

___

### hasSize

▸ **hasSize**(`x`: *unknown*): x is Sizeable

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *unknown* |

**Returns:** x is Sizeable

___

### hasTruthyProperties

▸ **hasTruthyProperties**<T\>(`t`: *any*, ...`args`: T[]): t is { [k in string \| number \| symbol]: unknown}

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`...args` | T[] |

**Returns:** t is { [k in string \| number \| symbol]: unknown}

___

### hasTruthyProperty

▸ **hasTruthyProperty**<P\>(`t`: *any*, `prop`: P): t is { [k in string \| number \| symbol]: unknown}

#### Type parameters:

Name | Type |
:------ | :------ |
`P` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |
`prop` | P |

**Returns:** t is { [k in string \| number \| symbol]: unknown}

___

### identity

▸ **identity**<T\>(`x`: T): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`x` | T |

**Returns:** T

___

### index

▸ **index**(`idx`: *number*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`idx` | *number* |

**Returns:** <T\>(`x`: *ArrayLike*<T\>) => T

___

### isAnyIterable

▸ **isAnyIterable**(`value`: *any*): value is AnyIterable<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is AnyIterable<any\>

___

### isArray

▸ `Const`**isArray**(`a`: *unknown*): a is any[]

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *unknown* |

**Returns:** a is any[]

___

### isAsyncIterable

▸ **isAsyncIterable**(`value`: *any*): value is AsyncIterable<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is AsyncIterable<any\>

___

### isBoolean

▸ **isBoolean**(`t`: *any*): t is number

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is number

___

### isClass

▸ **isClass**(`object`: *any*): object is Class<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *any* |

**Returns:** object is Class<any\>

___

### isFalsy

▸ **isFalsy**(`t`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** *boolean*

___

### isFunction

▸ **isFunction**(`t`: *any*): t is Func<Args, any\>

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is Func<Args, any\>

___

### isIterable

▸ **isIterable**(`value`: *any*): value is Iterable<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is Iterable<any\>

___

### isKeyOf

▸ **isKeyOf**<T\>(`key`: *string* \| *number* \| *symbol*, `target`: T): key is keyof T

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | Object |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* \| *number* \| *symbol* |
`target` | T |

**Returns:** key is keyof T

___

### isNull

▸ **isNull**(`t`: *any*): t is null

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is null

___

### isNumber

▸ **isNumber**(`t`: *any*): t is number

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is number

___

### isOnlyIterable

▸ **isOnlyIterable**(`value`: *any*): value is Iterable<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is Iterable<any\>

___

### isPromise

▸ **isPromise**(`t`: *any*): t is Promise<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is Promise<any\>

___

### isPromiseLike

▸ **isPromiseLike**(`t`: *any*): t is PromiseLike<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is PromiseLike<any\>

___

### isString

▸ **isString**(`t`: *any*): t is string

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** t is string

___

### isTruthy

▸ **isTruthy**(`t`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | *any* |

**Returns:** *boolean*

___

### length

▸ **length**(`x`: [*Lenghtable*](README.md#lenghtable) \| [*Sizeable*](README.md#sizeable)): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | [*Lenghtable*](README.md#lenghtable) \| [*Sizeable*](README.md#sizeable) |

**Returns:** *number*

___

### lesserOrEqual

▸ **lesserOrEqual**<T\>(`threshold`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | T |

**Returns:** (`x`: T) => *boolean*

___

### lesserThan

▸ **lesserThan**<T\>(`threshold`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`threshold` | T |

**Returns:** (`x`: T) => *boolean*

___

### propValue

▸ **propValue**<K, T\>(`k`: K): *function*

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K` | *string* \| *number* \| *symbol* | - |
`T` | *object* | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`k` | K |

**Returns:** (`t`: T) => T[K]

___

### size

▸ **size**(`x`: [*Sizeable*](README.md#sizeable)): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | [*Sizeable*](README.md#sizeable) |

**Returns:** *number*

___

### wait

▸ `Const`**wait**(`ms`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** *Promise*<void\>

▸ `Const`**wait**<T\>(`ms`: *number*, `value`: T): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |
`value` | T |

**Returns:** *Promise*<T\>
