import type { User, UserListItem } from '~/types/user'

export const useUsers = () => {
  const users = ref<UserListItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchUsers = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const config = useRuntimeConfig()
      const data = await $fetch<User[]>(`${config.public.apiBaseUrl}/users`)
      
      users.value = data.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city
      }))
    } catch (err) {
      console.error('Error fetching users:', err)
      error.value = 'Erro ao carregar usuários. Tente novamente.'
    } finally {
      loading.value = false
    }
  }

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    fetchUsers
  }
}
