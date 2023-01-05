export interface ICacheAlgo<K, V> {
	getElements: (k: K) => V | undefined;
	setElement: (k: K, v: V) => K | undefined;
	removeElement: (k: K) => boolean;
}
