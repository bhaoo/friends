# [布好好的朋友们](https://dwd.moe/friends)

来和布好交朋友吧！

## 友链说明

> [!NOTE]
> 小窝迁移可能会不小心遗漏伙伴的信息，若有遗漏可创建 `Pull Request` 进行添加，抱歉！

如果你的称呼、URL、头像或 Slogan 有所变动，请在此创建新的 `Pull Request` ，标题格式为 `chore: Update dwd.moe`（dwd.moe 请更换成你的域名）。

### 要求

- 先友后链，可能你还没有成为布好的熟人，可以先尝试一下可以在咱出没的地方捕捉布好相互认识哦。
- 至少会使用 Git 和 GitHub 这样你就可以自行添加和修改你的信息啦！
- 站点域名请使用 **非免费** 域名，但不包括 `github.io` 等由 GitHub 或其他服务商提供 PasS 时免费提供的二级域名。
- 站点的内容大部分是 **原创** 内容，任何领域和类型的内容均可，不能存在 **政治敏感** 及 **违法** 内容。
- 站点没有过多影响整体观感的广告且无恶意脚本。
- 若你的站点长时间无法访问，可能将会被移除哦。

### 格式

```yml
- name: "Bhao" # 你的称呼
  url: "https://dwd.moe" # 你的网站 URL
  img: "dwd.moe.jpg" # 你的头像文件名（请使用 domain.ext 的格式并上传至 src/img 中）
  desc: "布好布好布？好布好布好！" # 你的 Slogan
```

## 交换流程

1. 将布好的友链添加到你的网站中：
    - 称呼：`Bhao` 或 `布好`
    - 链接：`https://dwd.moe`
    - 头像：`https://gravatar.com/avatar/e0bc851d0ad0c120ff604124bba77e19?s=256`
        - 可以使用其他的 Gravatar 镜像，只要能显示出来！下面列出了两个哦。
        - WeAvatar: `https://weavatar.com/avatar/e0bc851d0ad0c120ff604124bba77e19?s=256`
        - Cravatar: `https://cravatar.com/avatar/e0bc851d0ad0c120ff604124bba77e19?s=256`
    - 描述：`布好布好布？好布好布好！`
        - 好朋友可以自行发挥，我不会在意的！
    - 邮箱: `i#bhao.top`
        - 使用时注意将 `#` 修改为 `@` 哦。
2. 在 GitHub 上 `Fork` 本仓库。
3. 按照 `格式` 一栏中提供的内容在 [`src/friends.yml`](./src/friends.yml) 文件末尾添加你的信息。
4. 准备好你的头像文件，并将其上传至 [`src/img`](./src/img) 文件夹下。
    - 文件格式支持 `jpg, jpeg, png, webp` 但最好是 `jpg` 哦！
    - 图片像素大小不超过 `512*512px`。
5. 完成上述步骤后，请新建一个 `Pull Request`，标题格式为 `chore: Add dwd.moe`（dwd.moe 请更换成你的域名）。
6. 当 `Pull Request` 被合并后，你的站点将会尽快显示在 [布好好的朋友们](https://dwd.moe/friends) 中。