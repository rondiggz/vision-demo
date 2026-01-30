import { useState } from 'react'
import {
  Users as UsersIcon,
  Search,
  Plus,
  Mail,
  Shield,
  Wrench,
  Settings,
  Eye,
  User,
  LayoutGrid,
  List,
  ChevronDown,
  Calendar,
  Activity
} from 'lucide-react'

type UserRole =
  | 'admin'
  | 'super_admin'
  | 'maintenance_tech'
  | 'maintenance_lead'
  | 'production_operator'
  | 'production_supervisor'
  | 'quality_engineer'
  | 'process_engineer'
  | 'training_coordinator'
  | 'safety_manager'
  | 'viewer'

type UserStatus = 'active' | 'inactive' | 'pending'

interface UserType {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
  department: string
  status: UserStatus
  avatar?: string
  lastActive: Date
  joinedDate: Date
  permissions: string[]
}

// Generate placeholder users
const generateUsers = (): UserType[] => {
  return [
    {
      id: '1',
      firstName: 'David',
      lastName: 'Chen',
      email: 'david.chen@company.com',
      role: 'super_admin',
      department: 'IT/Operations',
      status: 'active',
      lastActive: new Date('2026-01-30T14:30:00'),
      joinedDate: new Date('2023-03-15'),
      permissions: ['full_system_access', 'user_management', 'configuration', 'all_modules']
    },
    {
      id: '2',
      firstName: 'Sarah',
      lastName: 'Mitchell',
      email: 'sarah.mitchell@company.com',
      role: 'admin',
      department: 'Operations Management',
      status: 'active',
      lastActive: new Date('2026-01-30T11:15:00'),
      joinedDate: new Date('2023-06-01'),
      permissions: ['user_management', 'reporting', 'all_asset_access']
    },
    {
      id: '3',
      firstName: 'Marcus',
      lastName: 'Rodriguez',
      email: 'marcus.rodriguez@company.com',
      role: 'process_engineer',
      department: 'Engineering',
      status: 'active',
      lastActive: new Date('2026-01-30T09:45:00'),
      joinedDate: new Date('2023-08-20'),
      permissions: ['digital_twin_editing', 'marks_creation', 'documentation', 'training_content']
    },
    {
      id: '4',
      firstName: 'Jennifer',
      lastName: 'Park',
      email: 'jennifer.park@company.com',
      role: 'quality_engineer',
      department: 'Quality Assurance',
      status: 'active',
      lastActive: new Date('2026-01-30T13:20:00'),
      joinedDate: new Date('2023-09-10'),
      permissions: ['inspection_records', 'compliance_docs', 'quality_reports']
    },
    {
      id: '5',
      firstName: 'Thomas',
      lastName: 'Weber',
      email: 'thomas.weber@company.com',
      role: 'process_engineer',
      department: 'Engineering',
      status: 'active',
      lastActive: new Date('2026-01-29T16:40:00'),
      joinedDate: new Date('2024-01-05'),
      permissions: ['plc_documentation', 'electrical_systems', 'technical_docs']
    },
    {
      id: '6',
      firstName: 'Michael',
      lastName: 'Torres',
      email: 'michael.torres@company.com',
      role: 'maintenance_lead',
      department: 'Maintenance',
      status: 'active',
      lastActive: new Date('2026-01-30T15:10:00'),
      joinedDate: new Date('2022-11-12'),
      permissions: ['pm_scheduling', 'work_orders', 'team_assignments', 'parts_management']
    },
    {
      id: '7',
      firstName: 'Lisa',
      lastName: 'Andersen',
      email: 'lisa.andersen@company.com',
      role: 'maintenance_tech',
      department: 'Maintenance',
      status: 'active',
      lastActive: new Date('2026-01-30T12:50:00'),
      joinedDate: new Date('2023-04-18'),
      permissions: ['pm_execution', 'parts_requests', 'work_documentation']
    },
    {
      id: '8',
      firstName: 'James',
      lastName: 'Okonkwo',
      email: 'james.okonkwo@company.com',
      role: 'maintenance_tech',
      department: 'Maintenance',
      status: 'active',
      lastActive: new Date('2026-01-30T14:05:00'),
      joinedDate: new Date('2023-07-22'),
      permissions: ['g05_specialist', 'lubrication', 'mechanical_repair']
    },
    {
      id: '9',
      firstName: 'Emily',
      lastName: 'Nakamura',
      email: 'emily.nakamura@company.com',
      role: 'maintenance_tech',
      department: 'Maintenance',
      status: 'pending',
      lastActive: new Date('2026-01-30T10:30:00'),
      joinedDate: new Date('2026-01-20'),
      permissions: ['training_in_progress']
    },
    {
      id: '10',
      firstName: 'Robert',
      lastName: 'Kim',
      email: 'robert.kim@company.com',
      role: 'production_supervisor',
      department: 'Production',
      status: 'active',
      lastActive: new Date('2026-01-30T15:45:00'),
      joinedDate: new Date('2022-05-08'),
      permissions: ['shift_management', 'operator_training_signoff', 'production_reports']
    },
    {
      id: '11',
      firstName: 'Maria',
      lastName: 'Santos',
      email: 'maria.santos@company.com',
      role: 'production_operator',
      department: 'Production - Line 1',
      status: 'active',
      lastActive: new Date('2026-01-30T14:15:00'),
      joinedDate: new Date('2023-02-14'),
      permissions: ['g05_line1_certified', 'daily_checks', 'operator_logs']
    },
    {
      id: '12',
      firstName: 'Kevin',
      lastName: 'O\'Brien',
      email: 'kevin.obrien@company.com',
      role: 'production_operator',
      department: 'Production - Line 2',
      status: 'active',
      lastActive: new Date('2026-01-30T13:55:00'),
      joinedDate: new Date('2023-05-30'),
      permissions: ['g05_line2_certified', 'daily_checks', 'operator_logs']
    },
    {
      id: '13',
      firstName: 'Amanda',
      lastName: 'Foster',
      email: 'amanda.foster@company.com',
      role: 'training_coordinator',
      department: 'Training & Development',
      status: 'active',
      lastActive: new Date('2026-01-30T11:40:00'),
      joinedDate: new Date('2023-03-25'),
      permissions: ['academy_management', 'certification_tracking', 'training_content']
    },
    {
      id: '14',
      firstName: 'Richard',
      lastName: 'Patel',
      email: 'richard.patel@company.com',
      role: 'safety_manager',
      department: 'EHS',
      status: 'active',
      lastActive: new Date('2026-01-30T10:05:00'),
      joinedDate: new Date('2022-09-19'),
      permissions: ['safety_protocols', 'compliance', 'incident_reports']
    },
    {
      id: '15',
      firstName: 'Nicole',
      lastName: 'Bergman',
      email: 'nicole.bergman@mikron.com',
      role: 'viewer',
      department: 'External - Vendor',
      status: 'active',
      lastActive: new Date('2026-01-28T09:20:00'),
      joinedDate: new Date('2024-06-12'),
      permissions: ['read_only', 'support_tickets']
    }
  ]
}

const roleLabels: Record<UserRole, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
  maintenance_lead: 'Maintenance Lead',
  maintenance_tech: 'Maintenance Tech',
  production_supervisor: 'Production Supervisor',
  production_operator: 'Production Operator',
  quality_engineer: 'Quality Engineer',
  process_engineer: 'Process Engineer',
  training_coordinator: 'Training Coordinator',
  safety_manager: 'Safety Manager',
  viewer: 'Viewer'
}

const getRoleColor = (role: UserRole): string => {
  const colors: Record<UserRole, string> = {
    super_admin: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    admin: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    maintenance_lead: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    maintenance_tech: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    production_supervisor: 'bg-green-500/20 text-green-400 border-green-500/30',
    production_operator: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    quality_engineer: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    process_engineer: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    training_coordinator: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    safety_manager: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    viewer: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  }
  return colors[role]
}

const getRoleIcon = (role: UserRole) => {
  const iconSize = 14
  switch (role) {
    case 'super_admin':
    case 'admin':
      return <Shield size={iconSize} />
    case 'maintenance_lead':
    case 'maintenance_tech':
      return <Wrench size={iconSize} />
    case 'process_engineer':
    case 'quality_engineer':
      return <Settings size={iconSize} />
    case 'viewer':
      return <Eye size={iconSize} />
    default:
      return <User size={iconSize} />
  }
}

const getStatusColor = (status: UserStatus): string => {
  switch (status) {
    case 'active':
      return 'bg-green-500'
    case 'inactive':
      return 'bg-gray-500'
    case 'pending':
      return 'bg-yellow-500 animate-pulse'
  }
}

const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName[0]}${lastName[0]}`.toUpperCase()
}

const getTimeAgo = (date: Date): string => {
  const now = new Date('2026-01-30T16:00:00') // Current demo time
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export default function Users() {
  const [users] = useState<UserType[]>(generateUsers())
  const [searchQuery, setSearchQuery] = useState('')
  const [filterRole, setFilterRole] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterDepartment, setFilterDepartment] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card')
  const [showAddUserModal, setShowAddUserModal] = useState(false)

  // Get unique departments
  const departments = Array.from(new Set(users.map(u => u.department))).sort()

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roleLabels[user.role].toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = filterRole === 'all' || user.role === filterRole
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus
    const matchesDepartment = filterDepartment === 'all' || user.department === filterDepartment

    return matchesSearch && matchesRole && matchesStatus && matchesDepartment
  })

  // Stats
  const activeUsers = users.filter(u => u.status === 'active').length
  const pendingUsers = users.filter(u => u.status === 'pending').length
  const adminUsers = users.filter(u => u.role === 'admin' || u.role === 'super_admin').length

  return (
    <div className="h-full flex flex-col bg-slate-900">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Users</h1>
            <p className="text-gray-400">Manage team members and access control</p>
          </div>
          <button
            onClick={() => setShowAddUserModal(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
          >
            <Plus size={20} />
            Add User
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 text-white pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        {/* Filters and View Toggle */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {/* Role Filter */}
            <div className="relative">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="appearance-none bg-slate-800 text-white pl-4 pr-10 py-2.5 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
              >
                <option value="all">All Roles</option>
                {Object.entries(roleLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-slate-800 text-white pl-4 pr-10 py-2.5 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="appearance-none bg-slate-800 text-white pl-4 pr-10 py-2.5 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setViewMode('card')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'card' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Total Users</div>
          <div className="text-2xl font-bold text-white">{users.length}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Active</div>
          <div className="text-2xl font-bold text-green-400">{activeUsers}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Pending</div>
          <div className="text-2xl font-bold text-yellow-400">{pendingUsers}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Admins</div>
          <div className="text-2xl font-bold text-purple-400">{adminUsers}</div>
        </div>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-auto">
        {filteredUsers.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <UsersIcon className="mx-auto mb-4 text-gray-600" size={48} />
              <p className="text-gray-400 text-lg">No users found</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          </div>
        ) : viewMode === 'card' ? (
          // Card View
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-6">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-blue-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        {getInitials(user.firstName, user.lastName)}
                      </div>
                    )}
                    {/* Status Indicator */}
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${getStatusColor(user.status)}`} />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base mb-1 truncate">
                      {user.firstName} {user.lastName}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${getRoleColor(user.role)}`}>
                      {getRoleIcon(user.role)}
                      {roleLabels[user.role]}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="truncate">{user.email}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <UsersIcon size={14} className="flex-shrink-0" />
                    <span className="truncate">{user.department}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Activity size={12} />
                      <span>{getTimeAgo(user.lastActive)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>Joined {user.joinedDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Table View
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-900/50 border-b border-slate-700">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">User</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Department</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Last Active</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-700/50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                          {user.avatar ? (
                            <img
                              src={user.avatar}
                              alt={`${user.firstName} ${user.lastName}`}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                              {getInitials(user.firstName, user.lastName)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="text-white font-medium">{user.firstName} {user.lastName}</div>
                          <div className="text-gray-400 text-sm">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${getRoleColor(user.role)}`}>
                        {getRoleIcon(user.role)}
                        {roleLabels[user.role]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">{user.department}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`} />
                        <span className="text-gray-300 text-sm capitalize">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{getTimeAgo(user.lastActive)}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {user.joinedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddUserModal(false)}>
          <div className="bg-slate-800 rounded-lg max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus size={32} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Add User</h2>
              <p className="text-gray-400 mb-6">User management functionality coming soon. Contact your system administrator to add new users.</p>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
