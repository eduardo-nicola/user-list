
<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Lista de Usuários</h1>
      <p class="text-gray-600">Gerencie e visualize informações dos usuários</p>
    </div>

    <!-- Controls -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <!-- Search Input -->
        <div class="flex-1 max-w-md">
          <UiSearchInput 
            v-model="searchQuery" 
            placeholder="Pesquisar por nome, email ou cidade..."
          />
        </div>
        
        <!-- View Toggle -->
        <div>
          <UiTabs 
            v-model="viewMode" 
            :tabs="viewTabs"
            size="md"
            variant="pills"
            full-width
          />
        </div>
      </div>
      
      <!-- Results counter -->
      <div v-if="!loading" class="mt-4 text-sm text-gray-600">
        <template v-if="filteredUsers.length === users.length">
          {{ users.length }} usuário{{ users.length !== 1 ? 's' : '' }} encontrado{{ users.length !== 1 ? 's' : '' }}
        </template>
        <template v-else>
          {{ filteredUsers.length }} de {{ users.length }} usuário{{ users.length !== 1 ? 's' : '' }} encontrado{{ filteredUsers.length !== 1 ? 's' : '' }}
        </template>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-6">
      <!-- Loading State -->
      <UiLoadingSpinner v-if="loading" message="Carregando usuários..." />
      
      <!-- Error State -->
      <UiErrorMessage 
        v-else-if="error" 
        :message="error" 
        :retry="true"
        @retry="fetchUsers"
      />
      
      <!-- Users List -->
      <Transition 
        name="fade" 
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 transform scale-95"
        enter-to-class="opacity-100 transform scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 transform scale-100"
        leave-to-class="opacity-0 transform scale-95"
      >
        <component 
          :is="typeView[viewMode]" 
          :users="filteredUsers"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ViewMode } from '~/types/user'
import UsersUserTable from '~/components/users/UserTable.vue'
import UsersUserCards from '~/components/users/UserCards.vue'
// SEO
useHead({
  title: 'Lista de Usuários',
  meta: [
    { name: 'description', content: 'Aplicação para visualizar e pesquisar usuários da API JSONPlaceholder' }
  ]
})

// State
const viewMode = ref<ViewMode>('table')

// View tabs configuration
const viewTabs = [
  {
    label: 'Tabela',
    value: 'table',
    iconSvg: 'M3 10h18M3 6h18m-9 8h9'
  },
  {
    label: 'Cards',
    value: 'cards', 
    iconSvg: 'M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z'
  }
]

// View Table or Cards
const typeView = {
  table: UsersUserTable,
  cards: UsersUserCards
}

// Composables
const { users, loading, error, fetchUsers } = useUsers()
const { searchQuery, filteredUsers } = useUserFilters(users)

// Lifecycle
onMounted(() => {
  fetchUsers()
})

</script>