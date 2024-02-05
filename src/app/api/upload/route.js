import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { firebaseConfig } from '@/config/firebase';

initializeApp(firebaseConfig); const storage = getStorage()

export async function POST (request) {

    const data = await request.formData()
    const file = data.get('file')
    const bytes = await file.arrayBuffer()

    const storageRef = ref(storage, `archivos-next/${Date.now()}`)
    const metadata = { contentType: file.type };
    await uploadBytes(storageRef, Buffer.from(bytes), metadata)

    return new Response(JSON.stringify({
        msg: 'Uploading file'
    }))
}