<!-- TodoList.vue -->
<template>
  <div>
    <!-- INPUT -->
    <!-- v-model = two-way data binding -->
    <!-- v-model digunakan untuk form yang artinya bisa memasukkan dan menampilkan input secara 2 arah -->
    <input v-model="newTodo" placeholder="Masukkan todo..." />

    <!-- EVENT -->
    <!-- @click = event handling -->
    <!-- @click="addTodo" = memanggil fungsi addTodo saat tombol diklik -->
    <!-- simbol @ sama dengan v-on -->
    <button @click="addTodo">Tambah</button>

    <!-- CONDITIONAL RENDERING -->
    <!-- artinya: jika todos.length === 0, maka tampilkan p bertuliskan "belum ada todo"-->
    <p v-if="todos.length === 0">Belum ada todo</p>

    <!-- LIST RENDERING -->
    <!-- v-for = looping data -->
    <ul>
      <!-- artinya: looping setiap item dalam array todos -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- DATA BINDING -->
        {{ todo.text }}

        <!-- EVENT + PARAMETER -->
        <button @click="removeTodo(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // =========================
    // STATE / REACTIVE DATA
    // =========================
    // ref() = membuat data reaktif
    const newTodo = ref('')
    const todos = ref([])

    // =========================
    // METHOD / FUNCTION
    // =========================
    function addTodo() {
      if (newTodo.value.trim() === '') return
      // artinya jika newTodo kosong (hanya spasi), maka fungsi berhenti

      todos.value.push({
        text: newTodo.value,
      })
      // artinya jika ada newTodo, maka tambahkan ke array todos
      // text adalah properti dari object yang ditambahkan ke array todos

      newTodo.value = ''
      // artinya setelah menambahkan todo, input dikosongkan kembali
    }

    function removeTodo(index) {
      todos.value.splice(index, 1)
    }
    // splice() = menghapus item dari array
    // index = parameter yang diterima dari event klik tombol hapus

    // =========================
    // EXPOSE (KIRIM VARIABLE DAN FUNGSI) KE TEMPLATE
    // =========================
    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    }
  },
}
</script>

<style scoped>
/* scoped disini artinya style yang hanya berlaku untuk komponen ini */
input {
  padding: 5px;
  margin-right: 5px;
}

button {
  margin-left: 5px;
}
</style>
