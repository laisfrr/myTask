import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from './config'

export const tarefasCol = collection(db, 'tarefas')

export async function addTarefa(data) {
  await addDoc(tarefasCol, data)
}

export async function getTarefas() {
  //resultado da busca na colecao de tarefas
  const snapshot = await getDocs(tarefasCol)
  const tarefas = []

  snapshot.forEach(doc => {
    tarefas.push({ ...doc.data(), id: doc.id })
  })

  return tarefas
}

export async function getTarefasUsuario(idUsuario) {
  const filtro = query(tarefasCol, where('idUsuario', '==', idUsuario))
  const snapshot = await getDocs(filtro)
  const tarefas = []
  snapshot.forEach(doc => {
    tarefas.push({ ...doc.data(), id: doc.id })
  })

  return tarefas
}

export async function deleteTarefa(id) {
  const tarefaDoc = doc(tarefasCol, id) // identificando o documento
  //deleta de acordo com o id
  await deleteDoc(tarefaDoc)
}

export async function getTarefa(id) {
  const tarefaDoc = doc(tarefasCol, id)
  const snapshot = await getDoc(tarefaDoc)

  return snapshot.data()
}

export async function updateTarefa(id, data) {
  const tarefaDoc = doc(tarefasCol, id)
  await updateDoc(tarefaDoc, data)
}
