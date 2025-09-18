<template>
  <div v-if="users.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div
      v-for="(user, index) in users"
      :key="user.id"
      :style="{ animationDelay: `${index * 50}ms` }"
      class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-200 animate-fade-in hover:scale-105"
    >
      <div class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      
      <h3 class="text-lg font-semibold text-gray-900 mb-2 truncate">
        {{ user.name }}
      </h3>
      
      <div class="space-y-2">
        <div class="flex items-center text-sm text-gray-600">
          <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="truncate">{{ user.email }}</span>
        </div>
        
        <div class="flex items-center text-sm text-gray-600">
          <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="truncate">{{ user.city }}</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Empty state -->
  <div v-else class="text-center py-12 bg-white rounded-lg shadow-sm animate-fade-in">
    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    <h3 class="mt-4 text-sm font-medium text-gray-900">Nenhum usuário encontrado</h3>
    <p class="mt-2 text-sm text-gray-500">Tente ajustar sua pesquisa.</p>
  </div>
</template>

<script setup lang="ts">
import type { UserListItem } from '~/types/user'

interface Props {
  users: UserListItem[]
}

defineProps<Props>()
</script>
