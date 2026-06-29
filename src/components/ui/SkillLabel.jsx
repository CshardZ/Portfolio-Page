import React from 'react'

export default function SkillLabel({ skill }) {
  return (
    <span className="bg-gray-100 rounded-sm border border-gray-400 p-2 font-semibold m-1">
      { skill }
    </span>
  )
}
