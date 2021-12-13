import React from 'react'

export default function TeacherRow({name}) {
    return (
        <tr class="text-gray-700">
        <td class="px-4 py-3 text-ms font-semibold border">
          {name}
        </td>
      </tr>
    )
}
