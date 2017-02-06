init-ori:
	npm install ../css-modulesify
	gulp index

init-self:
	npm remove less-modulesify
	npm install ../less-modulesify
	gulp lessm
