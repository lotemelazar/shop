import { ICacheAlgo } from "./ICacheAlgo";

export abstract class AbstractCAcheAlgo<K, V> implements ICacheAlgo<K, V> {
	private capacity: number;

	public getElements(k: K): V | undefined {
		return;
	}

	public setElement(k: K, v: V): K | undefined {
		return;
	}

	public removeElement(k: K): boolean {
		return false;
	}
}
