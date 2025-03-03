import React from 'react'
import { Send, Download, Plus } from 'lucide-react'
import { Button } from './ui/button'

interface ActionButtonsProps {
  onSend?: () => void
  onReceive?: () => void
  onAddBank?: () => void
  className?: string
}

const ActionButtons = ({
  onSend = () => console.log('Send funds'),
  onReceive = () => console.log('Receive funds'),
  onAddBank = () => console.log('Add bank'),
  className = ''
}: ActionButtonsProps) => {
  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      <div className='flex gap-4 flex-1 items-start'>
        <Button
          variant="outline"
          className="flex items-center bg-secondary hover:bg-primary hover:text-white transition-all 
          items-start"
          onClick={onSend}
        >
          <Send size={20} className='hoverr:text-zom-primary' />
          Send
        </Button>

        <Button
          variant="outline"
          className="flex items-center bg-secondary hover:bg-primary hover:text-white transition-all"
          onClick={onReceive}
        >
          <Download size={16} />
          Receive
        </Button>
      </div>

      <div className="flex-1 flex justify-end">
      <Button
        variant="ghost"
        size="lg"
        className="flex items-center gap-2 hover:bg-primary/10 transition-all"
        onClick={onAddBank}
      >
        <Plus size={20} className='font-bold text-primary'/>
        <span className="font-medium text-primary">Add Bank</span>
      </Button>
      </div>
    </div>
  )
}

export default ActionButtons
