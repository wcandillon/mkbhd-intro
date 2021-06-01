# Remotion video

```
-r 30 -f image2 -s 3840x2160 -start_number 0 -i element-%03d.png -c:v prores_ks -profile:v 4444 -crf 28 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M -c:a aac -map 0:v -y /Users/wcandillon/tmp/mkbhd/out.mov
```




<p align="center">
  <a href="https://github.com/JonnyBurger/remotion-logo">
    <img src="https://github.com/JonnyBurger/remotion-logo/raw/main/withtitle/element-0.png">
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/JonnyBurger/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md).
