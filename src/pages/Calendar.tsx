import { useState } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Bell, Clock, Wrench } from 'lucide-react'

interface MaintenanceEvent {
  id: string
  title: string
  date: Date
  frequency: 'weekly' | 'quarterly' | 'biannual' | 'yearly'
  machine: string
  description: string
  details: string
  color: string
}

// Sample maintenance events for January 2026
const generateMaintenanceEvents = (): MaintenanceEvent[] => {
  const events: MaintenanceEvent[] = []

  // Weekly events (Green) - Every Monday
  const weeklyTasks = [
    {
      title: 'Check compressed air regulator water separator trap',
      description: 'Weekly air system inspection',
      details: 'Water in air supply may damage assembly system. Drain water separator trap and check regulator pressure settings.',
    },
    {
      title: 'Clean conveyor belt system (isopropyl alcohol 70:30)',
      description: 'Weekly conveyor maintenance',
      details: 'Clean belts with isopropyl alcohol solution, check for trapped parts or debris. Inspect belt tension and alignment.',
    }
  ]

  const mondays = [5, 12, 19, 26] // Mondays in January 2026
  const machines = ['Mikron G05 - Line 1', 'Mikron G05 - Line 2', 'G05 Assembly System']

  mondays.forEach((day, idx) => {
    weeklyTasks.forEach((task, taskIdx) => {
      events.push({
        id: `weekly-${day}-${taskIdx}`,
        title: task.title,
        date: new Date(2026, 0, day),
        frequency: 'weekly',
        machine: machines[idx % machines.length],
        description: task.description,
        details: task.details,
        color: '#22c55e'
      })
    })
  })

  // Quarterly events (Blue) - Jan 8, 15
  const quarterlyTasks = [
    {
      title: 'Lubricate P&P and vertical unit cams & geared wheels',
      description: 'Quarterly lubrication - 5M cycles',
      details: 'Clean old grease first, inspect cam surface for wear. Apply thin layer of Kluber grease per lubrication chart. Check for smooth operation.',
    },
    {
      title: 'Visual check & clean pallets and nests',
      description: 'Quarterly inspection - 5M cycles',
      details: 'Inspect pallets for damage or wear. Clean nest surfaces, check alignment. Verify locking mechanisms function properly.',
    },
    {
      title: 'Check locking pin and transfer bushings',
      description: 'Quarterly inspection - 5M cycles',
      details: 'Inspect locking pins for wear, verify smooth engagement. Check transfer bushings for play or damage.',
    },
    {
      title: 'Clean V-guide and front guide',
      description: 'Quarterly cleaning - 5M cycles',
      details: 'Remove debris from guide surfaces. Clean with approved solvent, check for scoring or damage. Verify proper clearances.',
    },
    {
      title: 'Check LinMot slider (CAUTION: strongly magnetized)',
      description: 'Quarterly inspection - 5M cycles',
      details: 'CAUTION: LinMot slider is strongly magnetized. Inspect slider for smooth motion, check position sensors. Remove any magnetic debris.',
    },
    {
      title: 'Check & lubricate drive cams & rollers',
      description: 'Quarterly maintenance - 5M cycles',
      details: 'Inspect drive cams for wear patterns. Lubricate cam followers and rollers per specification. Check for proper tracking.',
    },
    {
      title: 'Check gearbox oil level (3/4 full)',
      description: 'Quarterly check - 5M cycles',
      details: 'Verify gearbox oil level at 3/4 full mark. Check for leaks or contamination. Top up if needed with specified oil.',
    },
    {
      title: 'Lubricate Rise and Fall cams & rollers',
      description: 'Quarterly lubrication - 5M cycles',
      details: 'Clean old grease from Rise and Fall mechanism. Inspect cam surfaces, apply fresh grease. Verify smooth operation through full cycle.',
    }
  ]

  const quarterlyDates = [8, 15]
  quarterlyDates.forEach((day, idx) => {
    quarterlyTasks.forEach((task, taskIdx) => {
      events.push({
        id: `quarterly-${day}-${taskIdx}`,
        title: task.title,
        date: new Date(2026, 0, day),
        frequency: 'quarterly',
        machine: machines[(idx + taskIdx) % machines.length],
        description: task.description,
        details: task.details,
        color: '#3b82f6'
      })
    })
  })

  // Biannual events (Yellow) - Jan 22
  const biannualTasks = [
    {
      title: 'Lubricate transfer & indexing system linear bearings',
      description: 'Biannual lubrication - 10M cycles',
      details: 'Use greasing nipples on lower front of machine, both sides. Apply Klubersynth UH1-14-31 grease. Pump until fresh grease appears.',
    }
  ]

  biannualTasks.forEach((task, taskIdx) => {
    events.push({
      id: `biannual-22-${taskIdx}`,
      title: task.title,
      date: new Date(2026, 0, 22),
      frequency: 'biannual',
      machine: 'Mikron G05 - Line 1',
      description: task.description,
      details: task.details,
      color: '#eab308'
    })
  })

  // Yearly events (Red) - Jan 29
  const yearlyTasks = [
    {
      title: 'Full handling unit inspection & lubrication',
      description: 'Annual comprehensive service - 20M cycles',
      details: 'Complete disassembly and inspection of handling unit. Clean all components, check for wear. Lubricate all moving parts per specification chart.',
    },
    {
      title: 'Check all handling unit belts (tension & condition)',
      description: 'Annual belt inspection - 20M cycles',
      details: 'Inspect all belts for wear, cracking, or glazing. Check tension using frequency chart specifications. Replace any damaged belts.',
    },
    {
      title: 'Inspect control units',
      description: 'Annual electrical inspection - 20M cycles',
      details: 'Inspect all control units and electrical connections. Check for loose wires, corrosion, or damage. Test safety interlocks.',
    },
    {
      title: 'Change main gearbox oil (SGH 47: 0.5L, SGH 63: 0.8L)',
      description: 'Annual oil change - 20M cycles',
      details: 'Drain old gearbox oil completely. Inspect for metal particles or contamination. Refill with OLYT 3233 oil: 0.5L for SGH 47, 0.8L for SGH 63.',
    },
    {
      title: 'Clean/replace electrical cabinet filters (170x170mm)',
      description: 'Annual filter maintenance - 20M cycles',
      details: 'Remove electrical cabinet filters (170x170mm). Clean reusable filters or replace disposable filters. Ensure proper airflow for cooling.',
    }
  ]

  yearlyTasks.forEach((task, taskIdx) => {
    events.push({
      id: `yearly-29-${taskIdx}`,
      title: task.title,
      date: new Date(2026, 0, 29),
      frequency: 'yearly',
      machine: machines[taskIdx % machines.length],
      description: task.description,
      details: task.details,
      color: '#ef4444'
    })
  })

  return events
}

const frequencyLabels: Record<string, string> = {
  weekly: 'Weekly',
  quarterly: 'Quarterly / 5M Cycles',
  biannual: 'Biannual / 10M Cycles',
  yearly: 'Yearly / 20M Cycles'
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)) // January 2026
  const [selectedEvent, setSelectedEvent] = useState<MaintenanceEvent | null>(null)
  const [filterAsset, setFilterAsset] = useState('all')
  const [filterType, setFilterType] = useState('all')

  const events = generateMaintenanceEvents()

  // Get unique machines for filter
  const machines = Array.from(new Set(events.map(e => e.machine)))

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesAsset = filterAsset === 'all' || event.machine === filterAsset
    const matchesType = filterType === 'all' || event.frequency === filterType
    return matchesAsset && matchesType
  })

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const goToToday = () => {
    setCurrentDate(new Date(2026, 0, 1))
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const getEventsForDay = (day: number) => {
    return filteredEvents.filter(event => {
      const eventDate = event.date
      return eventDate.getDate() === day &&
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear()
    })
  }

  // Get upcoming events sorted by date
  const upcomingEvents = [...filteredEvents]
    .filter(e => e.date >= new Date(2026, 0, 1))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 8)

  // Render calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="min-h-[100px] bg-slate-800/30" />)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day)
      const isToday = day === 1 && currentDate.getMonth() === 0 // Treat Jan 1, 2026 as "today" for demo

      days.push(
        <div
          key={day}
          className={`min-h-[100px] bg-slate-800 border border-slate-700 p-2 hover:bg-slate-750 transition-colors ${
            isToday ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-400' : 'text-gray-300'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="text-xs p-1.5 rounded cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: event.color + '20', borderLeft: `3px solid ${event.color}` }}
              >
                <div className="font-medium text-white truncate">{event.title}</div>
                <div className="text-gray-400 truncate text-[10px]">{event.machine}</div>
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-[10px] text-gray-500 pl-1">+{dayEvents.length - 3} more</div>
            )}
          </div>
        </div>
      )
    }

    return days
  }

  // Sample notifications
  const notifications = [
    { id: '1', text: 'Weekly maintenance due on Line 1', time: '2 hours ago', type: 'warning' },
    { id: '2', text: 'Quarterly inspection completed - Line 2', time: '1 day ago', type: 'success' },
    { id: '3', text: 'Lubrication scheduled for next week', time: '2 days ago', type: 'info' },
  ]

  return (
    <div className="h-full flex gap-6 bg-slate-900 p-6">
      {/* Left Sidebar */}
      <div className="w-80 flex flex-col gap-6">
        {/* Timeline Section */}
        <div className="bg-slate-800 rounded-lg p-4 flex-1 overflow-hidden flex flex-col">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Clock size={20} className="text-blue-400" />
            Upcoming Events
          </h2>
          <div className="space-y-3 overflow-y-auto flex-1">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-slate-900 rounded-lg p-3 cursor-pointer hover:bg-slate-700 transition-colors border-l-4"
                style={{ borderLeftColor: event.color }}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="text-sm font-semibold text-white">{event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                  <div
                    className="text-[10px] px-2 py-0.5 rounded uppercase font-semibold"
                    style={{ backgroundColor: event.color + '30', color: event.color }}
                  >
                    {event.frequency}
                  </div>
                </div>
                <div className="text-sm text-white font-medium mb-1 line-clamp-2">{event.title}</div>
                <div className="text-xs text-gray-400">{event.machine}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Bell size={20} className="text-yellow-400" />
            Notifications
          </h2>
          <div className="space-y-2">
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-slate-900 rounded p-3">
                <div className="text-sm text-white mb-1">{notif.text}</div>
                <div className="text-xs text-gray-500">{notif.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Calendar */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <CalendarIcon size={28} className="text-blue-400" />
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToToday}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-semibold transition-colors"
                >
                  Today
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <select
                value={filterAsset}
                onChange={(e) => setFilterAsset(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Assets</option>
                {machines.map(machine => (
                  <option key={machine} value={machine}>{machine}</option>
                ))}
              </select>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Types</option>
                <option value="weekly">Weekly</option>
                <option value="quarterly">Quarterly</option>
                <option value="biannual">Biannual</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: '#22c55e' }} />
              <span className="text-gray-300">Weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: '#3b82f6' }} />
              <span className="text-gray-300">Quarterly (5M)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: '#eab308' }} />
              <span className="text-gray-300">Biannual (10M)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: '#ef4444' }} />
              <span className="text-gray-300">Yearly (20M)</span>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-slate-800 rounded-lg p-4 flex-1 overflow-auto">
          <div className="grid grid-cols-7 gap-px mb-px">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-slate-700 text-center py-2 font-semibold text-gray-300 text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-px">
            {renderCalendar()}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-slate-800 rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: selectedEvent.color }}
                >
                  <Wrench size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                  <div className="flex items-center gap-3 text-sm">
                    <span
                      className="px-3 py-1 rounded font-semibold uppercase"
                      style={{ backgroundColor: selectedEvent.color + '30', color: selectedEvent.color }}
                    >
                      {frequencyLabels[selectedEvent.frequency]}
                    </span>
                    <span className="text-gray-400">
                      {selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-gray-400 uppercase mb-1">Machine</div>
                <div className="text-white">{selectedEvent.machine}</div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-400 uppercase mb-1">Description</div>
                <div className="text-white">{selectedEvent.description}</div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-400 uppercase mb-1">Details</div>
                <div className="text-gray-300 leading-relaxed">{selectedEvent.details}</div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
