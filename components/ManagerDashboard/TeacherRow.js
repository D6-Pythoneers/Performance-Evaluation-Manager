import React from 'react'

export default function TeacherRow({name}) {
    return (
        <tr className="text-gray-700">
        <td className="px-4 py-3 text-ms font-semibold border">
          {name.name}
        </td>
      </tr>
    )
}
