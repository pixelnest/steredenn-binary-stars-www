# Steredenn: Binary Stars

## Develop

```
npm install
npm start
```

## Static export

```
npm run export
```

## Deploy

Create a `.env` file, and add:

```
SERVER_NAME=
```

With the name of your server.

Then:

```
npm run deploy
```

## Create thumbs

`thumbs-50` means thumbnails of quality 50.
`thumbs-80` means… thumbnails of quality 80. Oh yeah.

Use imagemagick:

```
for i in *.png; convert $i -resize 400x225 -quality 50 thumbs-50/$i.jpg; end
for i in *.png; convert $i -resize 400x225 -quality 80 thumbs-80/$i.jpg; end
```

You might need to remove a useless extension suffix.

TODO: script that.
