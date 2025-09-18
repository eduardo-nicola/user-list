import type { UserListItem } from '~/types/user'

export const useUserFilters = (users: Readonly<Ref<readonly UserListItem[]>>) => {
  const searchQuery = ref('')

  const filteredUsers = computed(() => {
    if (!searchQuery.value.trim()) {
      return users.value
    }

    const query = searchQuery.value.toLowerCase().trim()
    
    return users.value.filter((user) => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.city.toLowerCase().includes(query)
    )
  })

  const clearSearch = () => {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    filteredUsers,
    clearSearch
  }
}
