window.__gameCharacters__ = [
  {
    "id": "archaeologist",
    "name": "Ava",
    "title": "考古学家",
    "emoji": "🧭",
    "color": "#f7b267",
    "description": "擅长寻找线索，遇到难题会提醒你观察主语是谁。",
    "perk": {
      "name": "沙盘洞察",
      "summary": "每个句子自动点亮一个正确位置，帮你开局入手。",
      "effect": "autoHint"
    },
    "messages": {
      "welcome": ["沙盘已经展开，跟我一起修复金色文物吧！"],
      "correct": ["镶嵌成功！继续保持灵感。", "太棒了，这块碎片完美贴合。"],
      "error": ["嗯？这块似乎应该放在别处。", "再想想，动作碎片通常紧跟在主语后面。"],
      "hint": ["注意人物→动作→对象的顺序。"],
      "victory": ["展柜亮灯啦！你是真正的语法考古学家。"]
    }
  },
  {
    "id": "researcher",
    "name": "Noah",
    "title": "研究员",
    "emoji": "🧠",
    "color": "#7dd3fc",
    "description": "逻辑派研究员，会通过结构提示拆解复杂句。",
    "perk": {
      "name": "结构导航",
      "summary": "每放对一块，自动高亮下一块推荐槽位。",
      "effect": "sequenceGuide"
    },
    "messages": {
      "welcome": ["准备好进行语法实验了吗？"],
      "correct": ["数据匹配成功！", "逻辑成立，我们继续。"],
      "error": ["结构不太对劲，再验证一次。", "提示：先定位动作，再找修饰。"],
      "hint": ["使用句型 ①②③ 来排查空缺。"],
      "victory": ["全部验证通过，记录已保存。"]
    }
  },
  {
    "id": "guide",
    "name": "Mira",
    "title": "向导",
    "emoji": "🗺️",
    "color": "#fb7185",
    "description": "熟悉博物馆的每个角落，擅长给出故事化提示。",
    "perk": {
      "name": "故事投影",
      "summary": "每次放对碎片都会浮现短暂的中文释义线索。",
      "effect": "storyPeek"
    },
    "messages": {
      "welcome": ["展厅灯光已点亮，跟我一起开启巡展。"],
      "correct": ["美极了！文物又亮了一块。", "角色们都在为你鼓掌。"],
      "error": ["再等等，这块碎片想待在别处噢。", "试试把地点状语安排到句尾。"],
      "hint": ["想象句子化作路线图，从入口走到出口。"],
      "victory": ["所有灯光亮起，你就是语法小博士！"]
    }
  }
];
