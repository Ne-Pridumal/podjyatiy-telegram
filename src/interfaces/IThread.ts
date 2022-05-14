import { Timestamp } from 'firebase/firestore';
export interface IThreadData {
	uid: number | string | null,
	timestamp: Timestamp,
	displayName: string | null,
	email: string | null,
	message: string | null,
	photo: string | null,
}

export interface IThread {
	id: number | string,
	data: IThreadData,
}
